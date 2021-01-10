<cn>
#### 文本域
用于多行输入。
</cn>

<us>
#### TextArea
For multi-line input.
</us>

```vue
<template>
  <a-textarea v-model:value="value" placeholder="Basic usage" :rows="4" />
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
