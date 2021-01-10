<cn>
  #### 带有图标的
  图标放在文字前面
</cn>

<us>
 #### With an Icon
 The icon should be placed in front of the text
</us>

```vue
<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <home-outlined />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <user-outlined />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      Application
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    HomeOutlined,
    UserOutlined,
  },
};
</script>
```
