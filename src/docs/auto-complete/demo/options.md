<cn>
#### 自定义选项
也可以直接传递 #dataSource 的Option
</cn>

<us>
#### Customized
You could pass `#dataSource` as children of `AutoComplete`, instead of using `dataSource`。
</us>

```vue
<template>
  <a-auto-complete
    v-model:value="value"
    style="width: 200px"
    placeholder="input here"
    @search="handleSearch"
  >
    <template #dataSource>
      <a-select-option v-for="email in result" :key="email">
        {{ email }}
      </a-select-option>
    </template>
  </a-auto-complete>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      result: [],
    };
  },
  methods: {
    handleSearch(value) {
      let result;
      if (!value || value.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
      }
      this.result = result;
    },
  },
};
</script>
```
