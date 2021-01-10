<cn>
#### 基本用法
最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。
</cn>

<us>
#### Basic
The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.
</us>

```vue
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
<script>
const treeData = [
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

export default {
  data() {
    return {
      treeData,
      expandedKeys: ['0-0-0', '0-0-1'],
      selectedKeys: ['0-0-0', '0-0-1'],
      checkedKeys: ['0-0-0', '0-0-1'],
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
  },
};
</script>
```
