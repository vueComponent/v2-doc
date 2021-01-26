<docs>
---
order: 3
title:
  zh-CN: 可勾选
  en-US: Checkable
---

## zh-CN

使用勾选框实现多选功能。

## en-US

Multiple and checkable.

</docs>

<template>
  <a-tree-select
    v-model:value="value"
    style="width: 100%"
    :tree-data="treeData"
    tree-checkable
    allow-clear
    :show-checked-strategy="SHOW_PARENT"
    search-placeholder="Please select"
  />
</template>

<script lang="ts">
import { TreeSelect } from 'ant-design-vue';
import { defineComponent, ref, watch } from 'vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

interface TreeDataItem {
  value: string;
  key: string;
  title?: string;
  disabled?: boolean;
  children?: TreeDataItem[];
}

const treeData: TreeDataItem[] = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const value = ref<string[]>(['0-0-0']);

    watch(value, () => {
      console.log(value.value);
    });

    return {
      value,
      treeData,
      SHOW_PARENT,
    };
  },
});
</script>
