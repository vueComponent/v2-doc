<cn>
#### 自定义图标
自定义图标让信息类型更加醒目。
</cn>

<us>
#### Custom Icon
Custom Icon make information more clear and more friendly.
</us>

```vue
<template>
  <a-alert message="showIcon = false" type="success">
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Success Tips" type="success" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Informational Notes" type="info" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Warning" type="warning" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Error" type="error" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Success Tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
</template>

<script>
import { SmileOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SmileOutlined,
  },
};
</script>
```
