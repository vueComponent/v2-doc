<docs>
---
order: 5
title:
  zh-CN: 选择不超过七天的范围
  en-US: Select range dates in 7 days
---

## zh-CN

这里举例如何用 `onCalendarChange` 和 `disabledDate` 来限制动态的日期区间选择。

## en-US

A example shows how to select a dynamic range by using `onCalendarChange` and `disabledDate`.

</docs>

<template>
  <a-range-picker
    v-model:value="value"
    :disabledDate="disabledDate"
    @change="onChange"
    @openChange="onOpenChange"
    @calendarChange="onCalendarChange"
  />
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dates = ref<Moment[]>([]);
    const value = ref<Moment[]>();

    const disabledDate = (current: Moment) => {
      if (!dates.value || dates.value.length === 0) {
        return false;
      }
      const diffDate = current.diff(dates.value[0], 'days');
      return Math.abs(diffDate) > 7;
    };

    const onOpenChange = (open: boolean) => {
      if (open) {
        dates.value = [];
      }
    };

    const onChange = (val: Moment[]) => {
      value.value = val;
    };

    const onCalendarChange = (val: Moment[]) => {
      dates.value = val;
    };

    return {
      dates,
      value,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange,
    };
  },
});
</script>
