<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。

## en-US

The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.

</docs>

<template>
  <a-tree
    checkable
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    @select="onSelect"
    @check="onCheck"
  >
    <template #title0010><span style="color: #1890ff">sss</span></template>
  </a-tree>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SelectEvent, CheckEvent } from 'ant-design-vue/lib/tree/Tree'

interface TreeDataItem {
  key?: string;
  title?: string;
  disabled?: boolean;
  disableCheckbox?: boolean;
  slots?: any;
  children?: TreeDataItem[];
}

const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1'])
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1'])
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1'])
    
    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    }
    const onCheck = (checkedKeys: string[], info: CheckEvent) => {
      console.log('onCheck', checkedKeys, info);
    }
    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      onSelect,
      onCheck
    }
  }
});
</script>
