<cn>
#### 不可用
checkbox 不可用
</cn>

<us>
#### Disabled
Disabled checkbox
</us>

```vue
<template>
  <a-checkbox v-model:checked="checked1" disabled />
  <br />
  <a-checkbox v-model:checked="checked2" disabled />
</template>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
    };
  },
};
</script>
```
