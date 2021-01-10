<cn>
#### 不可用
Radio 不可用。
</cn>

<us>
#### disabled
Radio unavailable.
</us>

```vue
<template>
  <div>
    <a-radio v-model:checked="checked1" :disabled="disabled">
      Disabled
    </a-radio>
    <br />
    <a-radio v-model:checked="checked2" :disabled="disabled">
      Disabled
    </a-radio>
    <div :style="{ marginTop: 20 }">
      <a-button type="primary" @click="toggleDisabled">
        Toggle disabled
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: true,
      checked1: false,
      checked2: false,
    };
  },
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
```
