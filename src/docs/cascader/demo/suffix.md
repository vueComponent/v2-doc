<cn>
#### 后缀图标
省市区级联。
</cn>

<us>
#### Suffix
Cascade selection box for selecting province/city/district.
</us>

```vue
<template>
  <a-cascader
    v-model:value="value1"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
    @change="onChange"
  >
    <template #suffixIcon><smile-outlined class="test"/></template>
  </a-cascader>
  <a-cascader
    v-model:value="value2"
    suffix-icon="ab"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
    @change="onChange"
  />
</template>
<script>
import { SmileOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SmileOutlined,
  },
  data() {
    return {
      value1: [],
      value2: [],
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>
```
