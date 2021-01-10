<cn>
#### 禁用
选择框的不可用状态。
</cn>

<us>
#### Disabled
A disabled state of the `DatePicker`.
</us>

```vue
<template>
  <a-date-picker v-model:value="value1" />
  <br />
  <a-month-picker v-model:value="value2" disabled />
  <br />
  <a-range-picker v-model:value="value3" disabled />
</template>
<script>
import moment from 'moment';
export default {
  data() {
    const dateFormat = 'YYYY-MM-DD';
    return {
      value1: moment('2015-06-06', dateFormat),
      value2: moment('2015-06', 'YYYY-MM'),
      value3: [moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)],
    };
  },
};
</script>
```
