import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LRUCache from 'lru-cache';
import {
  createMarkdownRenderer,
  MarkdownOptions,
  MarkdownParsedData,
  MarkdownRenderer,
} from './markdown/markdown';
import { deeplyParseHeader } from './utils/parseHeader';
import { PageData, HeadConfig } from '../../typings/shared';
import slash from 'slash';
import escapeHtml from 'escape-html';
import fetchCode from './utils/fetchCode';
import tsToJs from './utils/tsToJs';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('vitepress:md');
const cache = new LRUCache<string, MarkdownCompileResult>({ max: 1024 });

interface MarkdownCompileResult {
  vueSrc: string;
  pageData: PageData;
}

export function createMarkdownToVueRenderFn(
  root: string = process.cwd(),
  options: MarkdownOptions = {},
): any {
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
    // eslint-disable-next-line prefer-const
    let { html, data } = md.render(content);
    // avoid env variables being replaced by vite
    html = html
      .replace(/import\.meta/g, 'import.<wbr/>meta')
      .replace(/process\.env/g, 'process.<wbr/>env');
    // TODO validate data.links?
    const pageData: PageData = {
      title: inferTitle(frontmatter, content),
      description: inferDescription(frontmatter),
      frontmatter,
      headers: data.headers,
      relativePath,
      content: escapeHtml(content),
      // TODO use git timestamp?
      lastUpdated: Math.round(fs.statSync(file).mtimeMs),
    };
    const newContent = data.vueCode
      ? genComponentCode(md, data, pageData)
      : `
<template><article class="markdown">${html}</article></template>

<script>
export default { pageData: ${JSON.stringify(pageData)} }
</script>
${fetchCode(content, 'style')}
`;

    debug(`[render] ${file} in ${Date.now() - start}ms.`);
    const result = {
      vueSrc: newContent.trim(),
      pageData,
    };
    cache.set(src, result);
    return result;
  };
}

function genComponentCode(md: MarkdownRenderer, data: PageData, pageData: PageData) {
  const { vueCode, headers = [] } = data as MarkdownParsedData;
  const cn = headers.find(h => h.title === 'zh-CN')?.content;
  const us = headers.find(h => h.title === 'en-US')?.content;
  let { html } = md.render(`\`\`\`vue
${vueCode.trim()}
\`\`\``);
  html = html
    .replace(/import\.meta/g, 'import.<wbr/>meta')
    .replace(/process\.env/g, 'process.<wbr/>env');
  const template = fetchCode(vueCode, 'template');
  const script = fetchCode(vueCode, 'script');
  const style = fetchCode(vueCode, 'style');
  const scriptContent = fetchCode(vueCode, 'scriptContent');
  const jsCode = tsToJs(scriptContent);
  const jsSourceCode = `
${template}
<script>
${jsCode}
</script>
${style}
  `.trim();
  let { html: jsVersion } = md.render(`\`\`\`vue
${jsSourceCode}
\`\`\``);
  jsVersion = jsVersion
    .replace(/import\.meta/g, 'import.<wbr/>meta')
    .replace(/process\.env/g, 'process.<wbr/>env');

  const jsfiddle = escapeHtml(
    JSON.stringify({
      us,
      cn,
      ...pageData.frontmatter,
      relativePath: pageData.relativePath,
      // htmlCode: Buffer.from(html).toString('base64'),
      // jsVersionHtml: Buffer.from(jsVersion).toString('base64'),
      sourceCode: Buffer.from(vueCode).toString('base64'),
      jsSourceCode: Buffer.from(jsSourceCode).toString('base64'),
    }),
  );

  const newContent = `
    <template>
      <demo-box :jsfiddle="${jsfiddle}">
        ${template.replace('<template>', '<template v-slot:default>')}
        <template #description>${md.render(cn || '').html}</template>
        <template #us-description>${md.render(us || '').html}</template>
        <template #htmlCode>${html}</template>
        <template #jsVersionHtml>${jsVersion}</template>
      </demo-box>
    </template>
    ${script}
    ${style}
    `;
  return newContent;
}

const inferTitle = (frontmatter: any, content: string) => {
  if (frontmatter.home) {
    return 'Home';
  }
  if (frontmatter.title) {
    return deeplyParseHeader(frontmatter.title);
  }
  const match = content.match(/^\s*#+\s+(.*)/m);
  if (match) {
    return deeplyParseHeader(match[1].trim());
  }
  return '';
};

const inferDescription = (frontmatter: Record<string, any>) => {
  if (!frontmatter.head) {
    return '';
  }

  return getHeadMetaContent(frontmatter.head, 'description') || '';
};

const getHeadMetaContent = (head: HeadConfig[], name: string): string | undefined => {
  if (!head || !head.length) {
    return undefined;
  }

  const meta = head.find(([tag, attrs = {}]) => {
    return tag === 'meta' && attrs.name === name && attrs.content;
  });

  return meta && meta[1].content;
};
