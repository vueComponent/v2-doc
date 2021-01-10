<cn>
#### 半星
支持选中半星。
</cn>

<us>
#### Half star
Support select half star.
</us>

```vue
<template>
  <a-rate v-model:value="value" allow-half />
</template>
<script>
export default {
  data() {
    return {
      value: 2.5,
    };
  },
};
</script>
```
