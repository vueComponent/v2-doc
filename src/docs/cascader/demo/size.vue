<docs>
---
order: 6
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

不同大小的级联选择器。

## en-US

Cascade selection box of different sizes.

</docs>
<template>
  <a-cascader v-model:value="value" size="large" :options="options" @change="onChange" />
  <br />
  <br />
  <a-cascader v-model:value="value" :options="options" @change="onChange" />
  <br />
  <br />
  <a-cascader v-model:value="value" size="small" :options="options" @change="onChange" />
  <br />
  <br />
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
    const onChange = (value: string[]) => {
      console.log(value);
    };

    return {
      value: ref<string[]>([]),
      options,
      onChange,
    };
  },
});
</script>
