<cn>
#### 内联登录栏
水平登录栏，常用在顶部导航栏中。
</cn>

<us>
#### Inline Login Form
Inline login form is often used in navigation bar.
</us>

```vue
<template>
  <a-form layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-item>
      <a-input v-model:value="formInline.user" placeholder="Username">
        <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formInline.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
  },
};
</script>
```
