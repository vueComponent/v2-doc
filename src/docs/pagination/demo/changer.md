<cn>
#### 改变
改变每页显示条目数。
</cn>

<us>
#### Changer
Change `pageSize`.
</us>

```vue
<template>
  <div>
    <a-pagination
      show-size-changer
      v-model:current="current1"
      v-model:pageSize="pageSize"
      :total="500"
      @showSizeChange="onShowSizeChange"
    />
    <br />
    <a-pagination
      v-model:current="current2"
      show-size-changer
      :total="500"
      disabled
      @showSizeChange="onShowSizeChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageSize: 20,
      current1: 3,
      current2: 4,
    };
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
};
</script>
```
