<docs>
---
order: 7
title:
  zh-CN: 目录
  en-US: Directory
---

## zh-CN

内置的目录树，`multiple` 模式支持 `ctrl(Windows)` / `command(Mac)` 复选。

## en-US

Built-in directory tree. `multiple` support `ctrl(Windows)` / `command(Mac)` selection.

</docs>

<template>
  <a-directory-tree multiple default-expand-all @select="onSelect" @expand="onExpand">
    <a-tree-node key="0-0" title="parent 0">
      <a-tree-node key="0-0-0" title="leaf 0-0" is-leaf />
      <a-tree-node key="0-0-1" title="leaf 0-1" is-leaf />
    </a-tree-node>
    <a-tree-node key="0-1" title="parent 1">
      <a-tree-node key="0-1-0" title="leaf 1-0" is-leaf />
      <a-tree-node key="0-1-1" title="leaf 1-1" is-leaf />
    </a-tree-node>
  </a-directory-tree>
</template>
<script lang="ts">
import { ExpendEvent, SelectEvent } from 'ant-design-vue/lib/tree/Tree';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onSelect = (keys: string[], event: SelectEvent) => {
      console.log('Trigger Select', keys, event);
    };
    const onExpand = (keys: string[], event: ExpendEvent) => {
      console.log('Expand', keys, event);
    };
    return {
      onSelect,
      onExpand,
    };
  },
});
</script>
