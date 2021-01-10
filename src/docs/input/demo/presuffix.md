<cn>
#### 前缀和后缀
在输入框上添加前缀或后缀图标。
</cn>

<us>
#### prefix and suffix
Add prefix or suffix icons inside input.
</us>

```vue
<template>
  <div class="components-input-demo-presuffix">
    <a-input placeholder="Basic usage" v-model:value="userName" ref="userNameInput">
      <template #prefix><user-outlined type="user"/></template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </template>
    </a-input>
    <br />
    <br />
    <a-input prefix="￥" suffix="RMB" />
  </div>
</template>

<script>
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
    InfoCircleOutlined,
  },
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = '';
    },
  },
};
</script>
```
