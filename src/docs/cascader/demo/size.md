<cn>
#### 大小
不同大小的级联选择器。
</cn>

<us>
#### Size
Cascade selection box of different sizes.
</us>

```vue
<template>
  <a-cascader v-model:value="value" size="large" :options="options" @change="onChange" />
  <br /><br />
  <a-cascader v-model:value="value" :options="options" @change="onChange" />
  <br /><br />
  <a-cascader v-model:value="value" size="small" :options="options" @change="onChange" />
  <br /><br />
</template>
<script>
export default {
  data() {
    return {
      value: [],
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
