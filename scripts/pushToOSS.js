/* eslint-disable @typescript-eslint/no-var-requires */
const OSS = require('ali-oss');
const path = require('path');
const fs = require('fs');

const accessKeyId = process.env.ALI_OSS_ACCESSKEY;
const accessKeySecret = process.env.ALI_OSS_SECRETKEY;

const client = new OSS({
  bucket: 'antdv',
  cname: 'true',
  endpoint: 'alicdn.antdv.com',
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: 'oss-cn-hongkong',
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
  accessKeyId: accessKeyId,
  accessKeySecret: accessKeySecret,
});

const assetsPath = path.join(process.cwd(), 'dist', 'assets');

async function put(file) {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    await client.put(`v2/assets/${file}`, path.join(assetsPath, file));
  } catch (e) {
    console.log(e);
  }
}

if (fs.existsSync(assetsPath)) {
  fs.readdir(assetsPath, async (err, files) => {
    for (let file of files) {
      console.log('upload ', file);
      await put(file);
    }
  });
}
