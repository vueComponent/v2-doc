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
  <a-range-picker
    :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
    @change="onChange"
  />
  <br />
  <a-range-picker
    :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
    show-time
    format="YYYY/MM/DD HH:mm:ss"
    @change="onChange"
  />
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onChange = (dates: Moment[], dateStrings: string[]) => {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    };

    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      moment,
      onChange,
    };
  },
});
</script>
