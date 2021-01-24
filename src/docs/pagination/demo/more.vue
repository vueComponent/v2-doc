<docs>
---
order: 1
title:
  zh-CN: 更多
  en-US: More
---

## zh-CN

更多分页。

## en-US

More pages.
</docs>

<template>
  <a-pagination v-model:current="current" :total="500" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
      current: 6,
    };
  },
});
</script>
