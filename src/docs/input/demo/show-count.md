<cn>
#### 带字数提示的文本域
展示字数提示。
</cn>

<us>
#### Textarea with character counting
Show character counting.
</us>

```vue
<template>
  <a-textarea v-model:value="value" showCount :maxlength="100" />
</template>
<script>
export default {
  data() {
    return {
      value: 'test value',
    };
  },
};
</script>
```
