<cn>
#### 加载中
进行全局 loading，异步自行移除。
</cn>

<us>
#### Message with loading indicator
Display a global loading indicator, which is dismissed by itself asynchronously.
</us>

```vue
<template>
  <a-button @click="success">
    Display a loading indicator
  </a-button>
</template>
<script>
import { message } from 'ant-design-vue';
export default {
  methods: {
    success() {
      const hide = message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    },
  },
};
</script>
```
