<cn>
#### 基本
最简单的下拉菜单。
</cn>

<us>
#### Basic
The most basic dropdown menu.
</us>

```vue
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Hover me <DownOutlined /> </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
import { DownOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    DownOutlined,
  },
};
</script>
```
