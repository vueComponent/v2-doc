<cn>
#### 连接线
带连接线的树。
</cn>

<us>
#### Tree With Line
Tree With Line
</us>

```vue
<template>
  <div>
    <div style="margin-bottom: 16px">
      showLine: <a-switch v-model:checked="showLine" />
      <br />
      <br />
      showIcon: <a-switch v-model:checked="showIcon" />
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
<script>
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    CarryOutOutlined,
    FormOutlined,
  },
  data() {
    return {
      showLine: true,
      showIcon: false,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
```
