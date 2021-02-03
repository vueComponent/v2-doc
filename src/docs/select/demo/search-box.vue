<docs>
---
order: 8
title:
  zh-CN: 搜索框
  en-US: Search Box
---

## zh-CN

搜索和远程数据结合。

## en-US

Search with remote data.

</docs>

<template>
  <a-select
    show-search
    v-model:value="value"
    placeholder="input search text"
    style="width: 200px"
    :default-active-first-option="false"
    :show-arrow="false"
    :filter-option="false"
    :not-found-content="null"
    @search="handleSearch"
    @change="handleChange"
  >
    <a-select-option v-for="d in data" :key="d.value">
      {{ d.text }}
    </a-select-option>
  </a-select>
</template>
<script>
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import { defineComponent, ref } from 'vue';

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default defineComponent({
  setup() {
    const data = ref([]);
    const value = ref(undefined);

    const handleSearch = value => {
      fetch(value, d => (data.value = d));
    };
    const handleChange = val => {
      console.log(val);
      value.value = val;
      fetch(value, d => (data.value = d));
    };
    return {
      handleSearch,
      handleChange,
      data,
      value,
    };
  },
});
</script>
