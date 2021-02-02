<docs>
---
order: 1
title:
  zh-CN: 默认值
  en-US: Default value
---

## zh-CN

默认值通过数组的方式指定。

## en-US

Specifies default value by an array.

</docs>
<template>
  <a-cascader :options="options" v-model:value="value" @change="onChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const value = ref<string[]>(['zhejiang', 'hangzhou', 'xihu']);

    const onChange = (value: string[]) => {
      console.log(value);
    };

    return {
      value,
      options,
      onChange,
    };
  },
});
</script>
