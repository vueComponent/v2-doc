<docs>
---
order: 0
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
  <a-time-picker v-model:value="value" />
  <a-time-picker v-model:value="strValue" valueFormat="HH:mm:ss" />
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<Moment>(moment('08:00:00', 'HH:mm:ss'));
    const strValue = ref<string>('09:00:00');

    watch(value, () => {
      console.log(value.value);
    });
    watch(strValue, () => {
      console.log(strValue.value);
    });
    return {
      value,
      strValue,
      moment,
    };
  },
});
</script>
