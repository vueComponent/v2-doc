<cn>
#### 分组
用 `OptGroup` 进行选项分组。
</cn>

<us>
#### Option Group
Using `OptGroup` to group the options.
</us>

```vue
<template>
  <a-select v-model:value="value" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <template #label>
        <span><user-outlined />Manager</span>
      </template>
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
    </a-select-opt-group>
    <a-select-opt-group label="Engineer">
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
      <a-select-option value="Yiminghe1">
        yiminghe1
      </a-select-option>
    </a-select-opt-group>
  </a-select>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  data() {
    return {
      value: ['lucy'],
    };
  },
  components: {
    UserOutlined,
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
```
