<cn>
#### 从数据直接生成
使用 `treeData` 把 JSON 数据直接生成树结构。
</cn>

<us>
#### Generate form tree data
The tree structure can be populated using `treeData` property. This is a quick and easy way to provide the tree content.
</us>

```vue
<template>
  <a-tree-select
    v-model:value="value"
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    placeholder="Please select"
    tree-default-expand-all
  >
    <template #title="{ key, value }">
      <span style="color: #08c" v-if="key === '0-0-1'"> Child Node1 {{ value }} </span>
    </template>
  </a-tree-select>
</template>

<script>
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        value: '0-0-1',
        key: '0-0-1',
        slots: {
          // custom title
          title: 'title',
        },
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
];
export default {
  data() {
    return {
      value: undefined,
      treeData,
    };
  },
  watch: {
    value(value) {
      console.log(value);
    },
  },
};
</script>
```
