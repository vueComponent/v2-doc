<docs>
---
order: 4
title:
  zh-CN: 禁用选项
  en-US: Disabled option
---

## zh-CN

通过指定 options 里的 `disabled` 字段。

## en-US

Disable option by specifying the `disabled` property in `options`.

</docs>
<template>
  <a-cascader v-model:value="value" :options="options" @change="onChange" />
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
    disabled: true,
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
