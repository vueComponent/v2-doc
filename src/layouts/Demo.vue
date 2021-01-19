<template>
  <article class="markdown">
    <section class="markdown">
      <h1>
        {{ frontmatter.title }}
        <span v-if="isZhCN" class="subtitle">{{ frontmatter.subtitle }}</span>
      </h1>
      <section class="markdown" v-html="description"></section>
    </section>
    <section class="markdown">
      <h2>{{ $t('app.component.examples') }}</h2>
    </section>
    <slot />
    <section class="markdown api-container" v-html="api"></section>
  </article>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'Demo',
  props: ['pageData', 'isZhCN'],
  setup(props) {
    const frontmatter = computed(() => props?.pageData?.frontmatter || {});
    const docHtml = computed(() => {
      return props?.pageData?.html || '';
    });
    const description = computed(() => {
      return docHtml.value.split('<h2 id="api">API</h2>')[0];
    });
    const api = computed(() => {
      return `
      <h2 id="API"><span>API</span><a href="#API" class="anchor">#</a></h2>
      ${docHtml.value.split('<h2 id="api">API</h2>')[1]}
      `;
    });
    return { frontmatter, description, api };
  },
});
</script>
<style lang="less" scoped></style>
