<docs>
---
order: 7
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

</docs>

<template>
  <a-time-picker v-model:value="value" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')">
    <template #suffixIcon><smile-outlined /></template>
  </a-time-picker>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    return {
      moment,
      value: ref<Moment | undefined>(),
    };
  },
});
</script>
