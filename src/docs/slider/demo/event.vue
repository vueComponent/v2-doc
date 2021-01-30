<docs>
---
order: 4
title:
  zh-CN: 事件
  en-US: Event
---

## zh-CN

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。

## en-US

The `onChange` callback function will fire when the user changes the slider's value. The `onAfterChange` callback function will fire when `onmouseup` fired.
</docs>

<template>
  <div class="code-box-demo">
    <a-slider v-model:value="value1" @change="onChange" @afterChange="onAfterChange" />
    <a-slider
      range
      :step="10"
      v-model:value="value2"
      @change="onChange"
      @afterChange="onAfterChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<[]<number>>([20, 50]);

    const onChange = (value) => {
      console.log('change: ', value);
    }

    const onAfterChange = (value) => {
      console.log('afterChange: ', value);
    }

    return {
      value1,
      value2,
      onChange,
      onAfterChange
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
