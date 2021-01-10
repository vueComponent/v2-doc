<cn>
#### 信息提示
各种类型的信息提示，只提供一个按钮用于关闭。
</cn>

<us>
#### Information modal dialog
In the various types of information modal dialog, only one button to close dialog is provided.
</us>

```vue
<template>
  <div>
    <a-button @click="info">
      Info
    </a-button>
    <a-button @click="success">
      Success
    </a-button>
    <a-button @click="error">
      Error
    </a-button>
    <a-button @click="warning">
      Warning
    </a-button>
  </div>
</template>
<script>
import { Modal } from 'ant-design-vue';
import { h } from 'vue';
export default {
  methods: {
    info() {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    },

    error() {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    },
  },
};
</script>
```
