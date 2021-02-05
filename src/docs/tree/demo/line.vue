<docs>
---
order: 5
title:
  zh-CN: 连接线
  en-US: Tree With Line
---

## zh-CN

节点之间带连接线的树，常用于文件目录结构展示。使用 `showLine` 开启，可以用 `switcherIcon` 修改默认图标。

## en-US

Tree with connected line between nodes, turn on by `showLine`, customize the preseted icon by `switcherIcon`.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      showLine:
      <a-switch v-model:checked="showLine" />
      <br />
      <br />
      showIcon:
      <a-switch v-model:checked="showIcon" />
    </div>
    <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <template #icon><carry-out-outlined /></template>
      <a-tree-node key="0-0">
        <template #icon><carry-out-outlined /></template>
        <template #title><span style="color: #1890ff">parent 1</span></template>
        <a-tree-node title="parent 1-0" key="0-0-0">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-0-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-1">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-2">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-1-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-2-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-2-1">
            <template #icon><carry-out-outlined /></template>
            <template #switcherIcon><form-outlined /></template>
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>
<script lang="ts">
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons-vue';
import { SelectEvent } from 'ant-design-vue/es/tree/Tree';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    CarryOutOutlined,
    FormOutlined,
  },
  setup() {
    const showLine = ref<boolean>(true);
    const showIcon = ref<boolean>(false);

    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    };
    return {
      showLine,
      showIcon,
      onSelect,
    };
  },
});
</script>
