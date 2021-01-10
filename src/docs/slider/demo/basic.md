<cn>
#### 基本
基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
</cn>

<us>
#### Basic
Basic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.
</us>

```vue
<template>
  <div>
    <a-slider id="test" v-model:value="value1" :disabled="disabled" />
    <a-slider range v-model:value="value2" :disabled="disabled" />
    Disabled: <a-switch size="small" v-model:checked="disabled" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 30,
      value2: [20, 50],
      disabled: false,
    };
  },
};
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
```
