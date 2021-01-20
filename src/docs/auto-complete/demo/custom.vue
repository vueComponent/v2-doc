<docs>
---
order: 2
title:
  zh-CN: 自定义输入组件
  en-US: Customize Input Component
---

## zh-CN

自定义输入组件。

## en-US

Customize Input Component.
</docs>

<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <a-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </a-auto-complete>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: '',
      options: [],
    };
  },
  methods: {
    onSelect(value) {
      console.log('onSelect', value);
    },
    handleSearch(value) {
      this.options = !value
        ? []
        : [{ value }, { value: value + value }, { value: value + value + value }];
    },
    handleKeyPress(ev) {
      console.log('handleKeyPress', ev);
    },
  },
};
</script>
