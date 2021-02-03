<docs>
---
order: 4
title:
  zh-CN: 不可选择日期和时间
  en-US: Disabled Date & Time
---

## zh-CN

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

## en-US

Disabled part of dates and time by `disabledDate` and `disabledTime` respectively, and `disabledTime` only works with `showTime`.

</docs>

<template>
  <a-date-picker
    format="YYYY-MM-DD HH:mm:ss"
    :disabled-date="disabledDate"
    :disabled-time="disabledDateTime"
    :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
  />
  <br />
  <a-month-picker :disabled-date="disabledDate" placeholder="Select month" />
  <br />
  <a-range-picker
    :disabled-date="disabledDate"
    :disabled-time="disabledRangeTime"
    :show-time="{
      hideDisabledOptions: true,
      defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
    }"
    format="YYYY-MM-DD HH:mm:ss"
  />
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const range = (start: number, end: number) => {
      const result = [];

      for (let i = start; i < end; i++) {
        result.push(i);
      }

      return result;
    };

    const disabledDate = (current: Moment) => {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    };

    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    };

    const disabledRangeTime = (_: Moment[], type: 'start' | 'end') => {
      if (type === 'start') {
        return {
          disabledHours: () => range(0, 60).splice(4, 20),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    };

    return {
      moment,
      disabledDate,
      disabledDateTime,
      disabledRangeTime,
    };
  },
});
</script>
