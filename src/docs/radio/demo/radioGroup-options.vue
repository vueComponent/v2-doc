<docs>
---
order: 5
title:
  zh-CN: RadioGroup 组合 - 配置方式
  en-US: RadioGroup group - optional
---

## zh-CN

通过配置 `options` 参数来渲染单选框。

## en-US

Render radios by configuring `options`.

</docs>
<template>
  <div>
    <a-radio-group :options="plainOptions" v-model:value="value1" @change="onChange1" />
    <br />
    <a-radio-group v-model:value="value2" :options="options" @change="onChange2" />
    <br />
    <a-radio-group
      v-model:value="value3"
      :options="optionsWithDisabled"
      disabled
      @change="onChange3"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default defineComponent({
  data() {
    const value1 = ref<string>('Apple');
    const value2 = ref<string>('Apple');
    const value3 = ref<string>('Apple');

    const onChange1 = (e: Event) => {
      console.log('radio1 checked', e.target.value);
    };

    const onChange2 = (e: Event) => {
      console.log('radio2 checked', e.target.value);
    };

    const onChange3 = (e: Event) => {
      console.log('radio3 checked', e.target.value);
    };

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
      onChange1,
      onChange2,
      onChange3,
    };
  },
});
</script>
