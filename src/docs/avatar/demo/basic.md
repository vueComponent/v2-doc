<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

<us>
#### basic
Three sizes and two shapes are available.
</us>

```vue
<template>
  <div>
    <div>
      <a-avatar :size="64">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar size="large">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar>
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar size="small">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
    <br />
    <div>
      <a-avatar shape="square" :size="64">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar shape="square" size="large">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <a-avatar shape="square" size="small">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
  },
};
</script>
```
