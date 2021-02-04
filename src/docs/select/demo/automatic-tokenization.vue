<docs>
---
order: 3
title:
  zh-CN: 自动分词
  en-US: Automatic tokenization
---

## zh-CN

试下复制 `露西,杰克` 到输入框里。只在 tags 和 multiple 模式下可用。

## en-US

Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.

</docs>

<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    :token-separators="[',']"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    return {
      handleChange,
      value: ref<string[]>([]),
    };
  },
});
</script>
