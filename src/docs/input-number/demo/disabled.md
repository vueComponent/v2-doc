<cn>
#### 不可用
点击按钮切换可用状态。
</cn>

<us>
#### Disabled
Click the button to toggle between available and disabled states.
</us>

```vue
<template>
  <div>
    <a-input-number :min="1" :max="10" :disabled="disabled" v-model:value="value" />
    <div style="marginTop:20px">
      <a-button type="primary" @click="toggle">
        Toggle disabled
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
      disabled: true,
    };
  },
  methods: {
    toggle() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
```
