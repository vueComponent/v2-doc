<docs>
---
order: 12
title:
  zh-CN: 自定义渲染
  en-US: Custum Time
---

## zh-CN

增加自定义渲染功能，在默认 `slot` 中，你可以设置任何你想渲染的组件。

## en-US

Added custom rendering function, in the default `slot`, you can set any component you want to render.

</docs>

<template>
  <a-date-picker v-model:value="time1" placeholder="Select Time" @change="onChange" @ok="onOk">
    <span>{{ time1 ? time1.toString() : 'SelectTime' }}</span>
  </a-date-picker>
  <br />
  <a-range-picker v-model:value="time2">
    <span>
      {{ time2 ? time2.toString() : '请选择' }}
    </span>
  </a-range-picker>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const time1 = ref<Moment>();
    const time2 = ref<Moment>();

    const onChange = (value: Moment, dateString: string) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: Moment) => {
      console.log('onOk: ', value);
    };

    const clearTime = () => {
      time1.value = undefined;
    };

    return {
      time1,
      time2,
      moment,
      onChange,
      onOk,
      clearTime,
    };
  },
});
</script>
