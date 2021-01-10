<cn>
#### 基本
一个通用的日历面板，支持年/月切换。
</cn>

<us>
#### basic
A basic calendar component with Year/Month switch.
</us>

```vue
<template>
  <a-calendar v-model:value="value" @panelChange="onPanelChange" />
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>
```
