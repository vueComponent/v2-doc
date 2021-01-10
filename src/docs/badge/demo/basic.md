<cn>
#### 基本
简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。
</cn>

<us>
#### basic
Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.
</us>

```vue
<template>
  <a-badge count="5">
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge count="0" show-zero>
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge>
    <template #count>
      <clock-circle-outlined style="color: #f5222d" />
    </template>
    <a href="#" class="head-example"></a>
  </a-badge>
</template>

<script>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    ClockCircleOutlined,
  },
};
</script>
```
