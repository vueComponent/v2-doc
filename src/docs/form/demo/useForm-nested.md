<cn>
#### useForm 嵌套表单
集成 [@ant-design-vue/use](https://github.com/vueComponent/use) 更加灵活的使用表单组件。使用点字符串拼接进行嵌套数据校验。
</cn>

<us>
#### useForm for nested Form
Integration [@ant-design-vue/use](https://github.com/vueComponent/use) use form components. Use dot string splicing for nested data verification.
</us>

```vue
<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name" v-bind="validateInfos.name">
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="Sub name" v-bind="validateInfos['sub.name']">
      <a-input v-model:value="modelRef.sub.name" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="reset">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
export default {
  setup() {
    const modelRef = reactive({
      name: '',
      sub: {
        name: '',
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    );
    const onSubmit = e => {
      e.preventDefault();
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
};
</script>
```
