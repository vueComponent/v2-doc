<script>
import Basic from './basic.md';
import CustomValidation from './custom-validation.md';
import DynamicFormItem from './dynamic-form-item.md';
import HorizontalLogin from './horizontal-login.md';
import Layout from './layout.md';
import Validation from './validation.md';
import UseFormBasic from './useForm-basic.md';
import UseFormNested from './useForm-nested.md';
import UseFormTrigger from './useForm-trigger.md';
import UseFormMerge from './useForm-merge.md';

import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
  cn: `# Form 表单
           具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用

- 需要对输入的数据类型进行校验时。

## 表单

我们为 \`form\` 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 \`<Form.Item />\` 。

## 组件注册

\`\`\`js
import { Form } from 'ant-design-vue';
app.use(Form);

\`\`\`
 ## 注意：
1、如果使用 \`Form.create\` 处理表单使其具有自动收集数据并校验的功能，建议使用\`jsx\`。
2、如果不是使用app.use(Form)形式注册的\`Form\`组件，你需要自行将\`$form\`挂载到Vue原型上。
\`app.config.globalProperties.$form = Form\`


## 代码演示
        `,
  us: `# Form
           Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.

## When to use

- When you need to validate fields in certain rules.

## Form Component

You can align the controls of a \`form\` using the \`layout\` prop：

- \`horizontal\`：to horizontally align the \`label\`s and controls of the fields. (Default)
- \`vertical\`：to vertically align the \`label\`s and controls of the fields.
- \`inline\`：to render form fields in one line.

## Form Item Component

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more. A form field is defined using \`<Form.Item />\`.

## Component Registration

\`\`\`js
import { Form } from 'ant-design-vue';
app.use(Form);
\`\`\`

## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '表单',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'Form',
  render() {
    return (
      <div class="form-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <Basic />
          <HorizontalLogin />
          <Layout />
          <Validation />
          <CustomValidation />
          <DynamicFormItem />
          <UseFormBasic />
          <UseFormNested />
          <UseFormTrigger />
          <UseFormMerge />
        </demo-sort>
        <api vSlots={{ cn: () => <CN /> }}>
          <US />
        </api>
      </div>
    );
  },
};
</script>
<style>
.form-demo .code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 700px;
}
</style>
