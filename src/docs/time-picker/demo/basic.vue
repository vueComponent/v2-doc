<docs>
---
order: 2
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

</docs>

<template>
  <a-time-picker
    v-model:value="value"
    :default-open-value="moment('00:00:00', 'HH:mm:ss')"
    @change="onChange"
  />
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<Moment>();

    const onChange = (time: Moment | string, timeString: string) => {
      console.log(time, timeString);
    };
    return {
      value,
      moment,
      onChange,
    };
  },
});
</script>
