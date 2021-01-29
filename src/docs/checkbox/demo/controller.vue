<docs>
---
order: 2
title:
  zh-CN: 受控的 checkbox
  en-US: Controlled Checkbox
---

## zh-CN

联动checkbox

## en-US

Communicated with other components

</docs>

<template>
  <p :style="{ marginBottom: '20px' }">
    <a-checkbox v-model:checked="checked" :disabled="disabled">
      {{ label }}
    </a-checkbox>
  </p>
  <p>
    <a-button type="primary" size="small" @click="toggleChecked">
      {{ !checked ? 'Check' : 'Uncheck' }}
    </a-button>
    <a-button :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
      {{ !disabled ? 'Disable' : 'Enable' }}
    </a-button>
  </p>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      disabled: false,
    };
  },
  computed: {
    label() {
      const { checked, disabled } = this;
      return `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
    },
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
    toggleDisable() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
