<cn>
#### 自定义展开/折叠图标
自定义展开/折叠图标。
</cn>

<us>
#### Customize collapse/expand icon
customize collapse/expand icon of tree node
</us>

```vue
<template>
  <a-tree showLine :defaultExpandedKeys="['0-0-0']" @select="onSelect">
    <template #switcherIcon><down-outlined /></template>
    <a-tree-node title="parent 1" key="0-0">
      <a-tree-node title="parent 1-0" key="0-0-0">
        <a-tree-node title="leaf" key="0-0-0-0" />
        <a-tree-node title="leaf" key="0-0-0-1" />
        <a-tree-node title="leaf" key="0-0-0-2" />
      </a-tree-node>
      <a-tree-node key="0-0-1" title="parent 1-1">
        <a-tree-node key="0-0-1-0" title="leaf" />
      </a-tree-node>
      <a-tree-node key="0-0-2" title="parent 1-2">
        <a-tree-node key="0-0-2-0" title="leaf" />
        <a-tree-node key="0-0-2-1" title="leaf" />
      </a-tree-node>
    </a-tree-node>
  </a-tree>
</template>
<script>
import { DownOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    DownOutlined,
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
```
