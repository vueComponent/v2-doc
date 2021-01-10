<cn>
#### 更新消息内容
可以通过唯一的 `key` 来更新内容。
</cn>

<us>
#### Update Message Content
Update message content with unique `key`.
</us>

```vue
<template>
  <a-button type="primary" @click="openMessage">
    Open the message box
  </a-button>
</template>
<script>
import { message } from 'ant-design-vue';
const key = 'updatable';
export default {
  methods: {
    openMessage() {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    },
  },
};
</script>
```
