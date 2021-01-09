import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LRUCache from "lru-cache";
import { createMarkdownRenderer, MarkdownOptions, MarkdownParsedData } from "./markdown/markdown";
import { deeplyParseHeader } from "./utils/parseHeader";
import { PageData, HeadConfig } from "../../types/shared";
import slash from "slash";
import cheerio from "cheerio";
import escapeHtml from "escape-html";

const debug = require("debug")("vitepress:md");
const cache = new LRUCache<string, MarkdownCompileResult>({ max: 1024 });

interface MarkdownCompileResult {
  vueSrc: string;
  pageData: PageData;
}

const fetch = (str: string, tag: string, scoped?: boolean) => {
  const $ = cheerio.load(str, {
    decodeEntities: false,
    xmlMode: true,
  });
  if (!tag) {
    return str;
  }
  if (tag === "style") {
    return scoped
      ? $(`${tag}[scoped]`).html()
      : $(`${tag}`).not(`${tag}[scoped]`).html();
  }
  return $(tag).html();
};

export function createMarkdownToVueRenderFn(
  root: string = process.cwd(),
  options: MarkdownOptions = {}
) {
  const md = createMarkdownRenderer(options);

  return (src: string, file: string): MarkdownCompileResult => {
    const relativePath = slash(path.relative(root, file));

    const cached = cache.get(src);
    if (cached) {
      debug(`[cache hit] ${relativePath}`);
      return cached;
    }

    const start = Date.now();

    const { content, data: frontmatter } = matter(src);
    let { html, data } = md.render(content);

    // avoid env variables being replaced by vite
    html = html
      .replace(/import\.meta/g, "import.<wbr/>meta")
      .replace(/process\.env/g, "process.<wbr/>env");
    // TODO validate data.links?
    const pageData: PageData = {
      title: inferTitle(frontmatter, content),
      description: inferDescription(frontmatter),
      frontmatter,
      headers: data.headers,
      relativePath,
      // TODO use git timestamp?
      lastUpdated: Math.round(fs.statSync(file).mtimeMs),
    };
    const { vueCode, headers = [] } = data as MarkdownParsedData;
    const cn = headers.find(h => h.title === 'zh-CN')?.content;
    const us = headers.find(h => h.title === 'en-US')?.content;
    const jsfiddle = escapeHtml(
      JSON.stringify({
        us,
        cn,
        sourceCode: Buffer.from(vueCode).toString("base64"),
      })
    );
    // const vueSrc =
    //   genPageDataCode(data.hoistedTags || [], pageData).join("\n") +
    //   `\n<template><div>${html}</div></template>`;
    const template = fetch(vueCode, "template");
    const script = fetch(vueCode, "script");
    const style = fetch(vueCode, "style");
    const scopedStyle = fetch(vueCode, "style", true);
    let newContent = `
    <template>
      <demo-box :jsfiddle="${jsfiddle}">
        <template #component>${template}</template>
        <template #description>${cn}</template>
        <template #us-description>${us}</template>
        <template #code>${Buffer.from(vueCode).toString("base64")}</template>
      </demo-box>
    </template>`;
    newContent += script
      ? `
      <script>
      ${script || ""}
      </script>
      `
      : "";
    newContent += style ? `<style>${style || ""}</style>` : "";
    newContent += scopedStyle
      ? `<style scoped>${scopedStyle || ""}</style>`
      : "";

    debug(`[render] ${file} in ${Date.now() - start}ms.`);

    const result = {
      vueSrc: newContent,
      pageData,
    };
    cache.set(src, result);
    return result;
  };
}

const scriptRE = /<\/script>/;
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/;
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/;
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/;

function genPageDataCode(tags: string[], data: PageData) {
  const code = `\nexport const __pageData = ${JSON.stringify(
    JSON.stringify(data)
  )}`;

  const existingScriptIndex = tags.findIndex((tag) => {
    return scriptRE.test(tag) && !scriptSetupRE.test(tag);
  });

  if (existingScriptIndex > -1) {
    const tagSrc = tags[existingScriptIndex];
    // user has <script> tag inside markdown
    // if it doesn't have export default it will error out on build
    const hasDefaultExport =
      defaultExportRE.test(tagSrc) || namedDefaultExportRE.test(tagSrc);
    tags[existingScriptIndex] = tagSrc.replace(
      scriptRE,
      code + (hasDefaultExport ? `` : `\nexport default{}\n`) + `</script>`
    );
  } else {
    tags.unshift(`<script>${code}\nexport default {}</script>`);
  }

  return tags;
}

const inferTitle = (frontmatter: any, content: string) => {
  if (frontmatter.home) {
    return "Home";
  }
  if (frontmatter.title) {
    return deeplyParseHeader(frontmatter.title);
  }
  const match = content.match(/^\s*#+\s+(.*)/m);
  if (match) {
    return deeplyParseHeader(match[1].trim());
  }
  return "";
};

const inferDescription = (frontmatter: Record<string, any>) => {
  if (!frontmatter.head) {
    return "";
  }

  return getHeadMetaContent(frontmatter.head, "description") || "";
};

const getHeadMetaContent = (
  head: HeadConfig[],
  name: string
): string | undefined => {
  if (!head || !head.length) {
    return undefined;
  }

  const meta = head.find(([tag, attrs = {}]) => {
    return tag === "meta" && attrs.name === name && attrs.content;
  });

  return meta && meta[1].content;
};
