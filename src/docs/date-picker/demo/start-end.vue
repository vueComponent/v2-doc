<docs>
---
order: 11
title:
  zh-CN: 自定义日期范围选择
  en-US: Customized Range Picker
---

## zh-CN

当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。
> - 通过设置 `disabledDate` 方法，来约束开始和结束日期。
> - 通过 `open` `openChange` 来优化交互。

## en-US

When `RangePicker` does not satisfied your requirements, try to implement similar functionality with two `DatePicker`.
> - Use the `disabledDate` property to limit the start and end dates.
> - Improve user experience with `open` and `openChange`.

</docs>

<template>
  <a-date-picker
    v-model:value="startValue"
    :disabled-date="disabledStartDate"
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    placeholder="Start"
    @openChange="handleStartOpenChange"
  />
  <a-date-picker
    v-model:value="endValue"
    :disabled-date="disabledEndDate"
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    placeholder="End"
    :open="endOpen"
    @openChange="handleEndOpenChange"
  />
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const startValue = ref<Moment>();
    const endValue = ref<Moment>();
    const endOpen = ref<boolean>(false);

    const disabledStartDate = (startValue: Moment) => {
      if (!startValue || !endValue.value) {
        return false;
      }

      return startValue.valueOf() > endValue.value.valueOf();
    };

    const disabledEndDate = (endValue: Moment) => {
      if (!endValue || !startValue.value) {
        return false;
      }

      return startValue.value.valueOf() >= endValue.valueOf();
    };

    const handleStartOpenChange = (open: boolean) => {
      if (!open) {
        endOpen.value = true;
      }
    };

    const handleEndOpenChange = (open: boolean) => {
      endOpen.value = open;
    };

    watch(startValue, (val: Moment) => {
      console.log('startValue', val);
    });

    watch(endValue, (val: Moment) => {
      console.log('endValue', val);
    });

    return {
      startValue,
      endValue,
      endOpen,
      disabledStartDate,
      disabledEndDate,
      handleStartOpenChange,
      handleEndOpenChange,
    };
  },
});
</script>
