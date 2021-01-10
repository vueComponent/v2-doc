<cn>
#### 后缀图标
最简单的用法。
</cn>

<us>
#### Suffix
The most basic usage.
</us>

```vue
<template>
  <a-tree-select
    v-model:value="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <template #suffixIcon><SmileOutlined /></template>
    <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
      <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
        <a-tree-select-node value="leaf1" title="my leaf" key="random" />
        <a-tree-select-node value="leaf2" title="your leaf" key="random1" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <template #title><b style="color: #08c">sss</b></template>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>

<script>
import { SmileOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SmileOutlined,
  },
  data() {
    return {
      value: undefined,
    };
  },
};
</script>
```
