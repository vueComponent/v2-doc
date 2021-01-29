<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的 checkbox

## en-US

Basic usage of checkbox

</docs>

<template>
  <a-checkbox v-model:checked="checked" @change="onChange">Checkbox</a-checkbox>
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
