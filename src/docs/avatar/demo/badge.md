<cn>
#### 带徽标的头像
通常用于消息提示。
</cn>

<us>
#### With Badge
Usually used for reminders and notifications.
</us>

```vue
<template>
  <div>
    <span style="margin-right:24px">
      <a-badge :count="1">
        <a-avatar shape="square">
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </a-badge>
    </span>
    <span>
      <a-badge dot>
        <a-avatar shape="square">
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </a-badge>
    </span>
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
