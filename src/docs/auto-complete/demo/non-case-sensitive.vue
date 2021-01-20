<docs>
---
order: 3
title:
  zh-CN: 不区分大小写
  en-US: Non-case-sensitive AutoComplete
---

## zh-CN

不区分大小写的 AutoComplete。

## en-US

A non-case-sensitive AutoComplete.
</docs>

<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    :filter-option="filterOption"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: '',
      options: [{ value: 'Burns Bay Road' }, { value: 'Downing Street' }, { value: 'Wall Street' }],
    };
  },
  methods: {
    filterOption(input, option) {
      return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
    },
  },
};
</script>
