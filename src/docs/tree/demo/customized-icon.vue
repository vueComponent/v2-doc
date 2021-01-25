<docs>
---
order: 6
title:
  zh-CN: 自定义图标
  en-US: Customize Icon
---

## zh-CN

可以针对不同的节点定制图标。

## en-US

You can customize icons for different nodes.

</docs>

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
<script lang="ts">
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled } from '@ant-design/icons-vue';
import { CheckEvent, SelectEvent } from 'ant-design-vue/lib/tree/Tree';
import { defineComponent } from 'vue';
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
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'custom' } },
    ],
  },
];

export default defineComponent({
  components: {
    DownOutlined,
    SmileOutlined,
    FrownOutlined,
    FrownFilled,
  },
  setup() {
    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys: string[], info: CheckEvent) => {
      console.log('onCheck', checkedKeys, info);
    };
    return {
      onSelect,
      onCheck,
      treeData,
    };
  },
});
</script>
