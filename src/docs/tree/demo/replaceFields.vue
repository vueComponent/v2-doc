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
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    :replace-fields="replaceFields"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { TreeDataItem } from 'ant-design-vue/es/tree/Tree';

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const replaceFields = {
      children: 'child',
      title: 'name',
    };

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
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });
    return {
      expandedKeys,
      selectedKeys,
      checkedKeys,
      replaceFields,
      treeData: ref(treeData),
    };
  },
});
</script>
