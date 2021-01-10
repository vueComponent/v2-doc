<cn>
#### 定制日期单元格
使用 `dateRender` 可以自定义日期单元格的内容和样式。
</cn>

<us>
#### Customized Date Rendering
We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.
</us>

```vue
<template>
  <a-date-picker v-model:value="value1">
    <template #dateRender="{ current, today }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
        {{ current.date() }}
      </div>
    </template>
  </a-date-picker>
  <a-range-picker v-model:value="value2">
    <template #dateRender="{ current, today }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-range-picker>
  <a-week-picker v-model:value="value3">
    <template #dateRender="{ current, today }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-week-picker>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: [],
      value3: null,
    };
  },
  methods: {
    getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
  },
};
</script>
```
