<docs>
---
order: 8
title:
  zh-CN: 三种大小
  en-US: Three Sizes
---

## zh-CN

三种大小的输入框，若不设置，则为 `default`。

## en-US

The input box comes in three sizes. `default` will be used if `size` is omitted.

</docs>

<template>
  <a-space direction="vertical">
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <a-date-picker :size="size" />
    <a-month-picker :size="size" placeholder="Select Month" />
    <a-range-picker :size="size" />
    <a-week-picker :size="size" placeholder="Select Week" />
  </a-space>
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref<string>('default'),
      moment,
    };
  },
});
</script>
