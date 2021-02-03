<docs>
---
order: 1
title:
  zh-CN: 日期格式
  en-US: Date Format
---

## zh-CN

使用 `format` 属性，可以自定义日期显示格式。

## en-US

We can set the date format by `format`.

</docs>

<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1" :format="dateFormat" />
    <a-date-picker v-model:value="value2" :format="dateFormatList" />
    <a-month-picker v-model:value="value3" :format="monthFormat" />
    <a-range-picker v-model:value="value4" :format="dateFormat" />
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return {
      value1: ref<Moment>(moment('2015/01/01', dateFormat)),
      value2: ref<Moment>(moment('01/01/2015', dateFormatList[0])),
      value3: ref<Moment>(moment('2015/01', monthFormat)),
      value4: ref<Moment[]>([moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]),
      dateFormat,
      monthFormat,
      dateFormatList,
      moment,
    };
  },
});
</script>
