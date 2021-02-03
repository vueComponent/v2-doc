<docs>
---
order: 6
title:
  zh-CN: 预设范围
  en-US: Preset Ranges
---

## zh-CN

可以预设常用的日期范围以提高用户体验。

## en-US

We can set presetted ranges to RangePicker to improve user experience.

</docs>

<template>
  <a-space direction="vertical">
    <a-range-picker v-model:value="value1" :ranges="ranges" />
    <a-range-picker
      style="width: 400px"
      v-model:value="value2"
      :ranges="ranges"
      show-time
      format="YYYY/MM/DD HH:mm:ss"
    />
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value1: ref<Moment[]>([]),
      value2: ref<Moment[]>([]),
      ranges: { Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] },
    };
  },
});
</script>
