<docs>
---
order: 9
title:
  zh-CN: 带搜索框
  en-US: Select with search field
---

## zh-CN

展开后可对选项进行搜索。

## en-US

Search the options while expanded.

</docs>

<template>
  <a-select
    v-model:value="value"
    show-search
    placeholder="Select a person"
    option-filter-prop="children"
    style="width: 200px"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="tom">Tom</a-select-option>
  </a-select>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = value => {
      console.log(`selected ${value}`);
    };
    const handleBlur = () => {
      console.log('blur');
    };
    const handleFocus = () => {
      console.log('focus');
    };
    const filterOption = (input, option) => {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      value: ref(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
    };
  },
});
</script>
