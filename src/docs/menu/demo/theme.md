<cn>
#### 主题
内建了两套主题 `light|dark`，默认 `light`。
</cn>

<us>
#### Menu Themes
There are two built-in themes: 'light' and 'dark'. The default value is 'light'.
</us>

```vue
<template>
  <div>
    <a-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    />
    <br />
    <br />
    <a-menu
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :theme="theme"
    >
      <a-menu-item key="1">
        <MailOutlined />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <CalendarOutlined />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><AppstoreOutlined /><span>Navigation Three</span></span>
        </template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><SettingOutlined /><span>Navigation Four</span></span>
        </template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  data() {
    return {
      theme: 'dark',
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    };
  },
  methods: {
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
```
