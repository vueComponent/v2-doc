<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

Basic use case. Users can select or input a date in panel.

</docs>

<template>
  <a-date-picker v-model:value="value1" @change="onChange" />
  <br />
  <a-month-picker v-model:value="value2" placeholder="Select month" @change="onChange" />
  <br />
  <a-range-picker v-model:value="value3" @change="onChange" />
  <br />
  <a-week-picker v-model:value="value4" placeholder="Select week" @change="onChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';
export default defineComponent({
  setup() {
    const onChange = (date: Moment, dateString: string) => {
      console.log(date, dateString);
    };

    return {
      value1: ref<Moment>(),
      value2: ref<Moment>(),
      value3: ref<Moment[]>([]),
      value4: ref<Moment>(),
      onChange,
    };
  },
});
</script>
