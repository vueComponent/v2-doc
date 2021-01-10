<cn>
#### 搜索框
带有搜索按钮的输入框。
</cn>

<us>
#### Search box
Example of creating a search box by grouping a standard input with a search button.
</us>

```vue
<template>
  <div>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <br /><br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <br /><br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <br /><br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      size="large"
      @search="onSearch"
    >
      <template #enterButton>
        <a-button>
          Custom
        </a-button>
      </template>
    </a-input-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(value) {
      console.log('use value', value);
      console.log('or use this.value', this.value);
    },
  },
};
</script>
```
