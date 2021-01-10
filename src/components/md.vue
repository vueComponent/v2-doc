<template>
  <div class="markdown" v-html="html" />
</template>
<script>
import { inject } from 'vue';
import marked from 'marked';
import { isZhCN } from '../utils/util';
const renderer = new marked.Renderer();
renderer.heading = function(text, level) {
  return (
    '<h' + level + ' id="' + text.replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n'
  );
};
marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
});
export default {
  name: 'Md',
  props: {
    cn: String,
    us: String,
  },
  setup() {
    return {
      demoContext: inject('demoContext', {}),
    };
  },
  data() {
    let text = '';
    const { cn, us } = this;
    if (this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text) {
      text = this.$slots.default[0].text;
    } else {
      text = isZhCN(this.demoContext.name) ? cn : us;
    }
    text = text || '';
    text = text
      .split('\n')
      .map(t => t.trim())
      .join('\n');

    return {
      html: marked(text),
    };
  },
};
</script>
