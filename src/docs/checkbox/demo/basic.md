<cn>
#### 基本用法
简单的checkbox
</cn>

<us>
#### Basic
Basic usage of checkbox
</us>

```vue
<template>
  <a-checkbox v-model:checked="checked" @change="onChange">
    Checkbox
  </a-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>
```
