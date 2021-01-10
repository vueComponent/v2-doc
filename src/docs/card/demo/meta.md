<cn>
  #### 支持更多内容配置
  一种支持封面、头像、标题和描述信息的卡片。
</cn>

<us>
  #### Support more content configuration
  A Card that supports `cover`, `avatar`, `title` and `description`.
</us>

```vue
<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
};
</script>
```
