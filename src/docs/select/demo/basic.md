<cn>
#### 基本使用
基本使用。
</cn>

<us>
#### Basic Usage
Basic Usage
</us>

```vue
<template>
  <div>
    <a-select
      v-model:value="value1"
      style="width: 120px"
      @focus="focus"
      ref="select"
      @change="handleChange"
    >
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select v-model:value="value2" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select v-model:value="value3" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 'lucy',
      value2: 'lucy',
      value3: 'lucy',
    };
  },
  methods: {
    focus() {
      console.log('focus');
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
```
