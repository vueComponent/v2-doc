<docs>
---
order: 1
title:
  zh-CN: 受控操作示例
  en-US: Controlled Tree
---

## zh-CN

受控操作示例。

## en-US

Controlled mode lets parent nodes reflect the status of child nodes more intelligently.

</docs>

<template>
  <a-tree
    v-model:checkedKeys="checkedKeys"
    checkable
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    @check="onCheck"
    @expand="onExpand"
    @select="onSelect"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SelectEvent } from 'ant-design-vue/lib/tree/Tree';
interface TreeDataItem {
  title?: string;
  key?: string;
  children?: TreeDataItem[];
}
const treeData: TreeDataItem[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const autoExpandParent = ref<boolean>(true);
    const checkedKeys = ref<string[]>(['0-0-0']);
    const selectedKeys = ref<string[]>([]);

    const onExpand = (expanded: string[]) => {
      console.log('onExpand', expanded);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      expandedKeys.value = expanded;
      autoExpandParent.value = false;
    };

    const onCheck = (checked: string[]) => {
      console.log('onCheck', checked);
    };

    const onSelect = (selected: string[], info: SelectEvent) => {
      console.log('onSelect', info);
      selectedKeys.value = selected;
    };

    return {
      treeData,
      expandedKeys,
      autoExpandParent,
      checkedKeys,
      selectedKeys,
      onExpand,
      onCheck,
      onSelect,
    };
  },
});
</script>
