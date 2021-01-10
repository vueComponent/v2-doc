<cn>
#### 上一步和下一步
修改上一步和下一步为文字链接。
</cn>

<us>
#### Prev and next
Use text link for prev and next button.
</us>

```vue
<template>
  <a-pagination :total="500">
    <template #itemRender="{ page, type, originalElement }">
      <a v-if="type === 'prev'">Previous</a>
      <a v-else-if="type === 'next'">Next</a>
      <renderVNode v-else :vnode="originalElement"></renderVNode>
    </template>
  </a-pagination>
</template>
<script>
function renderVNode(_, { attrs: { vnode } }) {
  return vnode;
}
export default {
  components: {
    renderVNode,
  },
};
</script>
```
