<cn>
#### 简洁
简单的翻页。
</cn>

<us>
#### Simple mode
Simple mode.
</us>

```vue
<template>
  <a-pagination simple v-model:current="current" :total="50" />
</template>
<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
};
</script>
```
