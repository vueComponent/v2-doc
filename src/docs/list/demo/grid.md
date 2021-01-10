<cn>
#### 栅格列表
可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。
</cn>

<us>
#### Grid
Creating a grid list by setting the `grid` property of List
</us>

```vue
<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-card :title="item.title">
          Card content
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style></style>
```
