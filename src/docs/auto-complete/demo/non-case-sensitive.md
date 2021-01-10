<cn>
#### 不区分大小写
不区分大小写的 AutoComplete
</cn>

<us>
#### Non-case-sensitive AutoComplete
A non-case-sensitive AutoComplete
</us>

```vue
<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    :filter-option="filterOption"
  />
</template>
<script>
export default {
  data() {
    return {
      value: '',
      options: [{ value: 'Burns Bay Road' }, { value: 'Downing Street' }, { value: 'Wall Street' }],
    };
  },
  methods: {
    filterOption(input, option) {
      return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
    },
  },
};
</script>
```
