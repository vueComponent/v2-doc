<cn>
#### 点击上传
经典款式，用户点击按钮弹出文件选择框。
</cn>

<us>
#### Upload by clicking
Classic mode. File selection dialog pops up when upload button is clicked.
</us>

```vue
<template>
  <a-upload
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button> <upload-outlined /> Click to Upload </a-button>
  </a-upload>
</template>
<script>
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UploadOutlined,
  },
  data() {
    return {
      fileList: [],
      headers: {
        authorization: 'authorization-text',
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>
```
