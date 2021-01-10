<cn>
#### 自定义图标
可以针对不同的节点定制图标。
</cn>

<us>
#### Customize Icon
You can customize icons for different nodes.
</us>

```vue
<template>
  <a-tree :tree-data="treeData" show-icon default-expand-all :default-selected-keys="['0-0-0']">
    <template #switcherIcon>
      <down-outlined />
    </template>
    <template #smile>
      <smile-outlined />
    </template>
    <template #meh>
      <smile-outlined />
    </template>
    <template #custom="{ selected }">
      <frown-filled v-if="selected" />
      <frown-outlined v-else />
    </template>
  </a-tree>
</template>
<script>
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled } from '@ant-design/icons-vue';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'custom' } },
    ],
  },
];

export default {
  components: {
    DownOutlined,
    SmileOutlined,
    FrownOutlined,
    FrownFilled,
  },
  data() {
    return {
      treeData,
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
