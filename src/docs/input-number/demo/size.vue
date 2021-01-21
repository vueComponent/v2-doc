<docs>
---
order: 0
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

## en-US

There are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.

</docs>

<template>
  <div>
    <a-input-number size="large" :min="1" :max="100000" v-model:value="value1" @change="onChange" />
    <a-input-number :min="1" :max="100000" v-model:value="value2" @change="onChange" />
    <a-input-number size="small" :min="1" :max="100000" v-model:value="value3" @change="onChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    const value3 = ref<number>(3);

    const onChange = (value: number) => {
      console.log('changed', value);
    };

    return {
      value1,
      value2,
      value3,
      onChange,
    };
  },
});
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
