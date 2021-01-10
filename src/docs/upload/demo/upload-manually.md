<cn>
#### 手动上传
`beforeUpload` 返回 `false` 后，手动上传文件。
</cn>

<us>
#### Upload manually
Upload files manually after `beforeUpload` returns `false`.
</us>

```vue
<template>
  <div class="clearfix">
    <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
      <a-button> <upload-outlined /> Select File </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button>
  </div>
</template>
<script>
import reqwest from 'reqwest';
import { UploadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
export default {
  components: {
    UploadOutlined,
  },
  data() {
    return {
      fileList: [],
      uploading: false,
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append('files[]', file);
      });
      this.uploading = true;

      // You can use any AJAX library you like
      reqwest({
        url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = [];
          this.uploading = false;
          message.success('upload successfully.');
        },
        error: () => {
          this.uploading = false;
          message.error('upload failed.');
        },
      });
    },
  },
};
</script>
```
