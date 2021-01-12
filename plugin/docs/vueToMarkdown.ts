import path from 'path';
import LRUCache from 'lru-cache';
import slash from 'slash';
import cheerio from 'cheerio';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('vitepress:md');
const cache = new LRUCache<string, MarkdownCompileResult>({ max: 1024 });

interface MarkdownCompileResult {
  vueSrc: string;
}

const fetch = (str: string, tag: string, scoped?: boolean) => {
  const $ = cheerio.load(str, {
    decodeEntities: false,
    xmlMode: true,
  });
  if (!tag) {
    return str;
  }
  if (tag === 'style') {
    return scoped ? $(`${tag}[scoped]`).html() : $(`${tag}`).not(`${tag}[scoped]`).html();
  }
  return $(tag).html();
};

export function createVueToMarkdownRenderFn(root: string = process.cwd()): any {
  return (src: string, file: string): MarkdownCompileResult => {
    const relativePath = slash(path.relative(root, file));

    const cached = cache.get(src);
    if (cached) {
      debug(`[cache hit] ${relativePath}`);
      return cached;
    }

    const start = Date.now();

    const docs = fetch(src, 'docs');
    const template = fetch(src, 'template');
    const script = fetch(src, 'script');
    const style = fetch(src, 'style');
    const scopedStyle = fetch(src, 'style', true);
    let newContent = `${docs}
\`\`\`vue
<template>
  ${template}
</template>`;
    newContent += script
      ? `
<script lang="ts">
${script || ''}
</script>
`
      : '';
    newContent += style ? `<style>${style || ''}</style>` : '';
    newContent += scopedStyle ? `<style scoped>${scopedStyle || ''}</style>` : '';
    newContent += `\n\`\`\``;
    debug(`[render] ${file} in ${Date.now() - start}ms.`);
    const result = {
      vueSrc: newContent,
    };
    cache.set(src, result);
    return result;
  };
}
