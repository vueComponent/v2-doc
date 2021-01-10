<cn>
#### 基本
最简单的用法。
</cn>

<us>
#### Basic
The basic example.
</us>

```vue
<template>
  <a-popconfirm
    title="Are you sure delete this task?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script>
import { message } from 'ant-design-vue';
export default {
  methods: {
    confirm(e) {
      console.log(e);
      message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      message.error('Click on No');
    },
  },
};
</script>
```
