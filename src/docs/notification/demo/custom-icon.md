<cn>
#### 自定义图标
图标可以被自定义。
</cn>

<us>
#### Customized Icon
The icon can be customized to any vue node or (h) => vue node.
</us>

```vue
<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
<script>
import { SmileOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';
export default {
  methods: {
    openNotification() {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <SmileOutlined style="color: #108ee9" />,
      });
    },
  },
};
</script>
```
