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
  <a-date-picker :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />
  <br />
  <a-date-picker
    :default-value="moment('01/01/2015', dateFormatList[0])"
    :format="dateFormatList"
  />
  <br />
  <a-month-picker :default-value="moment('2015/01', monthFormat)" :format="monthFormat" />
  <br />
  <a-range-picker
    :default-value="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
    :format="dateFormat"
  />
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
      moment,
    };
  },
});
</script>
