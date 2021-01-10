<cn>
#### 基本使用
基本使用。通过 options 设置自动完成的数据源
</cn>

<us>
#### Basic Usage
Basic Usage, set datasource of autocomplete with `options` property.
</us>

```vue
<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
    @change="onChange"
  />
</template>
<script>
const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};
export default {
  data() {
    return {
      value: '',
      options: [],
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  methods: {
    onSearch(searchText) {
      console.log('searchText');
      this.options = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    onChange(value) {
      console.log('onChange', value);
    },
  },
};
</script>
```
