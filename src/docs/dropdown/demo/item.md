<cn>
#### 其他元素
分割线和不可用菜单项。
</cn>

<us>
#### Other elements
Divider and disabled menu item.
</us>

```vue
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()"> Hover me <DownOutlined /> </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"
            >1st menu item</a
          >
        </a-menu-item>
        <a-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"
            >2nd menu item</a
          >
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3" disabled>
          3rd menu item（disabled）
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
