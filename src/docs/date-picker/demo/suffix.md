<cn>
#### 后缀图标
最简单的用法，在浮层中可以选择或者输入日期。
</cn>

<us>
#### Suffix
Basic use case. Users can select or input a date in panel.
</us>

```vue
<template>
  <a-date-picker @change="onChange">
    <template #suffixIcon><SmileOutlined /></template>
  </a-date-picker>
  <br />
  <a-month-picker @change="onChange" placeholder="Select month">
    <template #suffixIcon><SmileOutlined /></template>
  </a-month-picker>
  <br />
  <a-range-picker @change="onChange">
    <template #suffixIcon><SmileOutlined /></template>
  </a-range-picker>
  <br />
  <a-week-picker @change="onChange" placeholder="Select week">
    <template #suffixIcon><SmileOutlined /></template>
  </a-week-picker>
  <br />
  <a-date-picker suffix-icon="ab" @change="onChange" />
  <br />
  <a-month-picker suffix-icon="ab" placeholder="Select month" @change="onChange" />
  <br />
  <a-range-picker suffix-icon="ab" @change="onChange" />
  <br />
  <a-week-picker suffix-icon="ab" placeholder="Select week" @change="onChange" />
</template>
<script>
import { SmileOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    SmileOutlined,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
```
