<docs>
---
order: 0
title:
  zh-CN: 12 小时制
  en-US: 12 hours
---

## zh-CN

12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。

## en-US

TimePicker of 12 hours format, with default format `h:mm:ss a`.

</docs>

<template>
  <div>
    <a-time-picker use12-hours @change="onChange" />
    <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
    <a-time-picker use12-hours format="h:mm a" @change="onChange" />
  </div>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onChange = (time: Moment | string, timeString: string) => {
      console.log(time, timeString);
    };

    return {
      onChange,
    };
  },
});
</script>
