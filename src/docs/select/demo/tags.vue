<docs>
---
order: 2
title:
  zh-CN: 标签
  en-US: Tags
---

## zh-CN

tags select，随意输入的内容（scroll the menu）

## en-US

Select with tags, transform input to tag (scroll the menu)

</docs>

<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = value => {
      console.log(`selected ${value}`);
    };
    return {
      value: ref([]),
      handleChange,
    };
  },
});
</script>
