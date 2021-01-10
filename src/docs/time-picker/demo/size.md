<cn>
#### 三种大小
三种大小的输入框，大的用在表单中，中的为默认。
</cn>

<us>
#### Three Sizes
The input box comes in three sizes. large is used in the form, while the medium size is the default.
</us>

```vue
<template>
  <div>
    <a-time-picker v-model:value="value1" size="large" />
    <a-time-picker v-model:value="value2" />
    <a-time-picker v-model:value="value3" size="small" />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      value1: moment('12:08:23', 'HH:mm'),
      value2: moment('12:08:23', 'HH:mm'),
      value3: moment('12:08:23', 'HH:mm'),
    };
  },
  methods: {
    moment,
  },
};
</script>
```
