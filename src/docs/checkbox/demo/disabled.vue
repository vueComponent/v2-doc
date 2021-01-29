<docs>
---
order: 3
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

checkbox 不可用

## en-US

Disabled checkbox

</docs>

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
