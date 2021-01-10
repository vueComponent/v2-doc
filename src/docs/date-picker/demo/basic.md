<cn>
#### 基本
最简单的用法，在浮层中可以选择或者输入日期。
</cn>

<us>
#### Basic
Basic use case. Users can select or input a date in panel.
</us>

```vue
<template>
  <a-date-picker v-model:value="value1" @change="onChange" />
  <br />
  <a-month-picker v-model:value="value2" placeholder="Select month" @change="onChange" />
  <br />
  <a-range-picker v-model:value="value3" @change="onChange" />
  <br />
  <a-week-picker v-model:value="value4" placeholder="Select week" @change="onChange" />
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: [],
      value4: null,
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
```
