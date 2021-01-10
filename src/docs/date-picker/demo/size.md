<cn>
#### 三种大小
三种大小的输入框，若不设置，则为 `default`。
</cn>

<us>
#### Three Sizes
The input box comes in three sizes. `default` will be used if `size` is omitted.
</us>

```vue
<template>
  <a-radio-group v-model:value="size">
    <a-radio-button value="large">
      Large
    </a-radio-button>
    <a-radio-button value="default">
      Default
    </a-radio-button>
    <a-radio-button value="small">
      Small
    </a-radio-button>
  </a-radio-group>
  <br /><br />
  <a-date-picker :size="size" />
  <br />
  <a-month-picker :size="size" placeholder="Select Month" />
  <br />
  <a-range-picker :size="size" />
  <br />
  <a-week-picker :size="size" placeholder="Select Week" />
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      size: 'default',
    };
  },
};
</script>
```
