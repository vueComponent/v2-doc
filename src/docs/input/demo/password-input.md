<cn>
#### 密码框
密码框,版本 1.4.0 中新增。
</cn>

<us>
#### Password box
Input type of password and added in 1.4.0.
</us>

```vue
<template>
  <a-input-password v-model:value="value" placeholder="input password" />
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
```
