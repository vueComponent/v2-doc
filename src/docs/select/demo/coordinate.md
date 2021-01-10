<cn>
#### 联动
省市联动是典型的例子。
推荐使用 [Cascader](/components/cascader-cn/) 组件。
</cn>

<us>
#### coordinate
Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
Using the [Cascader](/components/cascader) component is strongly recommended instead as it is more flexible and capable.
</us>

```vue
<template>
  <div>
    <a-select v-model:value="province" style="width: 120px">
      <a-select-option v-for="pro in provinceData" :key="pro">
        {{ pro }}
      </a-select-option>
    </a-select>
    <a-select v-model:value="secondCity" style="width: 120px">
      <a-select-option v-for="city in cities" :key="city">
        {{ city }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
export default {
  data() {
    const province = provinceData[0];
    return {
      province,
      provinceData,
      cityData,
      secondCity: cityData[province][0],
    };
  },
  computed: {
    cities() {
      return cityData[this.province];
    },
  },
  watch: {
    province(val) {
      this.secondCity = this.cityData[val][0];
    },
  },
};
</script>
```
