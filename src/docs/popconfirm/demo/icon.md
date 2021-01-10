<cn>
#### 自定义 Icon 图标
使用 `icon` 自定义提示 `icon`。
</cn>

<us>
#### Customize icon
Set `icon` props to customize the icon.
</us>

```vue
<template>
  <a-popconfirm title="Are you sure？">
    <template #icon><question-circle-outlined style="color: red"/></template>
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script>
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    QuestionCircleOutlined,
  },
};
</script>
```
