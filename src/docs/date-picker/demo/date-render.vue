<docs>
---
order: 9
title:
  zh-CN: 定制日期单元格
  en-US: Customized Date Rendering
---

## zh-CN

使用 `dateRender` 可以自定义日期单元格的内容和样式。

## en-US

We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.

</docs>

<template>
  <a-date-picker v-model:value="value1">
    <template #dateRender="{ current, today }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
        {{ current.date() }}
      </div>
    </template>
  </a-date-picker>
  <a-range-picker v-model:value="value2">
    <template #dateRender="{ current }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-range-picker>
  <a-week-picker v-model:value="value3">
    <template #dateRender="{ current }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-week-picker>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { CSSProperties, defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const getCurrentStyle = (current: Moment) => {
      const style: CSSProperties = {};

      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }

      return style;
    };
    return {
      value1: ref<Moment>(),
      value2: ref<Moment[]>([]),
      value3: ref<Moment>(),
      getCurrentStyle,
    };
  },
});
</script>
