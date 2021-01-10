<cn>
#### 自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。本例还使用 `has-feedback` 属性为输入框添加了表示校验结果的反馈图标。
自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### Custom validation rules
This example shows how to customize your own validation rules to finish a two-factor password verification.
You can use `has-feedback` to reflect validation result as an icon.
Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
</us>

```vue
<template>
  <a-form
    name="custom-validation"
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item required has-feedback label="Password" name="pass">
      <a-input v-model:value="ruleForm.pass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input v-model:value="ruleForm.checkPass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Age" name="age">
      <a-input-number v-model:value="ruleForm.age" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    let checkAge = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject('Please input the age');
      }
      if (!Number.isInteger(value)) {
        return Promise.reject('Please input digits');
      } else {
        if (value < 18) {
          return Promise.reject('Age must be greater than 18');
        } else {
          return Promise.resolve();
        }
      }
    };
    let validatePass = async (rule, value) => {
      if (value === '') {
        return Promise.reject('Please input the password');
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        return Promise.resolve();
      }
    };
    let validatePass2 = async (rule, value, callback) => {
      if (value === '') {
        return Promise.reject('Please input the password again');
      } else if (value !== this.ruleForm.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    handleFinish(values) {
      console.log(values);
    },
    handleFinishFailed(errors) {
      console.log(errors);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
```
