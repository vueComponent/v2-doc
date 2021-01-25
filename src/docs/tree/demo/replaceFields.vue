<docs>
---
order: 9
title:
  zh-CN: 自定义TreeNode字段
  en-US: ReplaceFields
---

## zh-CN

替换treeNode中 title,key,children字段为treeData中对应的字段

## en-US

Replace the title,key and children fields in treeNode with the corresponding fields in treeData.

</docs>

<template>
  <a-tree
    checkable
    :tree-data="treeData"
    :default-expanded-keys="['0-0-0', '0-0-1']"
    :default-selected-keys="['0-0-0', '0-0-1']"
    :default-checked-keys="['0-0-0', '0-0-1']"
    :replace-fields="replaceFields"
    @select="onSelect"
    @check="onCheck"
  />
</template>
<script lang="ts">
import { CheckEvent, SelectEvent } from 'ant-design-vue/lib/tree/Tree';
import { defineComponent, ref } from 'vue';
interface TreeDataItem {
  name: string;
  key: string;
  disabled?: boolean;
  disableCheckbox?: boolean;
  child?: TreeDataItem[];
}
const treeData: TreeDataItem[] = [
  {
    name: 'parent 1',
    key: '0-0',
    child: [
      {
        name: '张晨成',
        key: '0-0-0',
        disabled: true,
        child: [
          { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { name: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        name: 'parent 1-1',
        key: '0-0-1',
        child: [{ key: '0-0-1-0', name: 'zcvc' }],
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const replaceFields = {
      children: 'child',
      title: 'name',
    };

    const onSelect = (keys: string[], info: SelectEvent) => {
      console.log('Trigger Select', keys, event);
    };

    const onCheck = (keys: string[], info: CheckEvent) => {
      console.log('onCheck', keys, info);
    };
    return {
      replaceFields,
      treeData,
      onSelect,
      onCheck,
    };
  },
});
</script>
