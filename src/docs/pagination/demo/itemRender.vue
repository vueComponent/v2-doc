<docs>
---
order: 8
title:
  zh-CN: 上一步和下一步
  en-US: Prev and next
---

## zh-CN

修改上一步和下一步为文字链接。

## en-US

Use text link for prev and next button.
</docs>

<template>
  <a-pagination :total="500">
    <template #itemRender="{ page, type, originalElement }">
      <a v-if="type === 'prev'">Previous</a>
      <a v-else-if="type === 'next'">Next</a>
      <renderVNode v-else :vnode="originalElement"></renderVNode>
    </template>
  </a-pagination>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

function renderVNode(_, { attrs: { vnode } }) {
  return vnode;
}
export default defineComponent({
  components: {
    renderVNode,
  },
});
</script>

