<cn>
#### 前置/后置标签
用于配置一些固定组合。
</cn>

<us>
#### Pre / Post tab
Using pre & post tabs example.
</us>

```vue
<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-input addon-before="Http://" addon-after=".com" v-model:value="value1" />
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value2">
        <template #addonBefore>
          <a-select v-model:value="value3" style="width: 90px">
            <a-select-option value="Http://">
              Http://
            </a-select-option>
            <a-select-option value="Https://">
              Https://
            </a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select v-model:value="value4" style="width: 80px">
            <a-select-option value=".com">
              .com
            </a-select-option>
            <a-select-option value=".jp">
              .jp
            </a-select-option>
            <a-select-option value=".cn">
              .cn
            </a-select-option>
            <a-select-option value=".org">
              .org
            </a-select-option>
          </a-select>
        </template>
      </a-input>
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value5">
        <template #addonAfter>
          <setting-outlined />
        </template>
      </a-input>
    </div>
  </div>
</template>

<script>
import { SettingOutlined } from '@ant-design/icons-vue';
export default {
  data() {
    return {
      value1: 'mysite',
      value2: 'mysite',
      value3: 'Http://',
      value4: '.com',
      value5: 'mysite',
    };
  },
  components: {
    SettingOutlined,
  },
};
</script>
```
