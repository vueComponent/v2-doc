<cn>
#### 配合 Form 使用
受控模式，例如配合 Form 使用。
</cn>

<us>
#### With Form
Controlled mode, for example, to work with `Form`.
</us>

```vue
<template>
  <a-form ref="form" :model="form" :rules="rules" layout="horizontal">
    <a-form-item
      label="Top coders"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      name="coders"
    >
      <a-mentions rows="1" v-model:value="form.coders">
        <a-mentions-option value="afc163">
          afc163
        </a-mentions-option>
        <a-mentions-option value="zombieJ">
          zombieJ
        </a-mentions-option>
        <a-mentions-option value="yesmeck">
          yesmeck
        </a-mentions-option>
      </a-mentions>
    </a-form-item>
    <a-form-item label="Bio" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" name="bio">
      <a-mentions rows="3" placeholder="You can use @ to ref user here" v-model:value="form.bio">
        <a-mentions-option value="afc163">
          afc163
        </a-mentions-option>
        <a-mentions-option value="zombieJ">
          zombieJ
        </a-mentions-option>
        <a-mentions-option value="yesmeck">
          yesmeck
        </a-mentions-option>
      </a-mentions>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click="handleSubmit">
        Submit
      </a-button>
      <a-button style="margin-left: 8px;" @click="handleReset">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { Mentions } from 'ant-design-vue';
const { getMentions } = Mentions;
export default {
  data() {
    return {
      form: {
        bio: '',
        coders: '',
      },
      rules: {
        bio: [{ required: true }],
        coders: [{ validator: this.checkMention }],
      },
    };
  },
  methods: {
    handleReset(e) {
      e.preventDefault();
      this.$refs.form.resetFields();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form
        .validateFields()
        .then(() => {
          console.log('Submit!!!');
          console.log(this.form);
        })
        .catch(errors => {
          console.log('Errors in the form!!!', errors);
        });
    },
    async checkMention(rule, value, callback) {
      const mentions = getMentions(value);
      if (mentions.length < 2) {
        return Promise.reject('More than one must be selected!');
      } else {
        return Promise.resolve();
      }
    },
  },
};
</script>
```
