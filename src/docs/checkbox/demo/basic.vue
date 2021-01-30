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
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
});
</script>
