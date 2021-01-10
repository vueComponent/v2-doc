<cn>
#### 两种大小
`size="small"` 表示小号开关。
</cn>

<us>
#### Two sizes
`size="small"` represents a small sized switch.
</us>

```vue
<template>
  <div>
    <a-switch v-model:checked="checked1" />
    <br />
    <a-switch size="small" v-model:checked="checked2" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
    };
  },
};
</script>
```
