<docs>
---
order: 7
title:
  zh-CN: 手动上传
  en-US: Upload manually
---

## zh-CN

`beforeUpload` 返回 `false` 后，手动上传文件。

## en-US

Upload files manually after `beforeUpload` returns `false`.
</docs>

<template>
  <div class="clearfix">
    <a-upload
      :file-list="fileList"
      :remove="handleRemove"
      :before-upload="beforeUpload"
      v-model:file-list="fileList"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Select File
      </a-button>
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
<script lang="ts">
import request from 'umi-request';
import { UploadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<any>([]);
    const uploading = ref<boolean>(false);

    const handleRemove = (file: any) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload = (file: any) => {
      fileList.value.push(file);
      return false;
    };

    const handleUpload = () => {
      const formData = new FormData();
      fileList.value.forEach((file: any) => {
        formData.append('files[]', file);
      });
      uploading.value = true;

      // You can use any AJAX library you like
      request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData,
      })
        .then(() => {
          fileList.value = [];
          uploading.value = false;
          message.success('upload successfully.');
        })
        .catch(() => {
          uploading.value = false;
          message.error('upload failed.');
        });
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },
});
</script>
