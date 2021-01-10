<cn>
#### 带下拉框的按钮
左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。
</cn>

<us>
#### Button with dropdown menu
A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.
</us>

```vue
<template>
  <a-dropdown-button @click="handleButtonClick">
    Dropdown
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1"><UserOutlined />1st menu item</a-menu-item>
        <a-menu-item key="2"><UserOutlined />2nd menu item</a-menu-item>
        <a-menu-item key="3"><UserOutlined />3rd item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
  <a-dropdown-button>
    Dropdown
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1"><UserOutlined />1st menu item</a-menu-item>
        <a-menu-item key="2"><UserOutlined />2nd menu item</a-menu-item>
        <a-menu-item key="3"><UserOutlined />3rd item</a-menu-item>
      </a-menu>
    </template>
    <template #icon><UserOutlined /></template>
  </a-dropdown-button>
  <a-dropdown-button disabled style="margin-left: 8px" @click="handleButtonClick">
    Dropdown
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1"><UserOutlined />1st menu item</a-menu-item>
        <a-menu-item key="2"><UserOutlined />2nd menu item</a-menu-item>
        <a-menu-item key="3"><UserOutlined />3rd item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1"><UserOutlined />1st menu item</a-menu-item>
        <a-menu-item key="2"><UserOutlined />2nd menu item</a-menu-item>
        <a-menu-item key="3"><UserOutlined />3rd item</a-menu-item>
      </a-menu>
    </template>
    <a-button style="margin-left: 8px"> Button <DownOutlined /> </a-button>
  </a-dropdown>
</template>

<script>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    DownOutlined,
  },
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
```
