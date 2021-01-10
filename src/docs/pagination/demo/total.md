<cn>
#### 总数
通过设置 `showTotal` 展示总共有多少数据。
</cn>

<us>
#### Total number
You can show the total number of data by setting `showTotal`.
</us>

```vue
<template>
  <div>
    <a-pagination
      :total="85"
      :show-total="total => `Total ${total} items`"
      :page-size="20"
      v-model:current="current1"
    />
    <br />
    <a-pagination
      :total="85"
      :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
      :page-size="20"
      v-model:current="current2"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      current1: 1,
      current2: 1,
    };
  },
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>
```
