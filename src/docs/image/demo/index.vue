<script>
import Basic from './basic';
import Fallback from './fallback';
import Placeholder from './placeholder';
import PreviewGroup from './previewGroup';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
const md = {
  cn: `# Image 图片
          可预览的图片。
## 何时使用
- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。
          ## 代码演示`,
  us: `# Image
         Previewable image.
## When To Use
- When you need to display pictures.
- Display when loading a large image or fault tolerant handling when loading fail.
## Examples `,
};
export default {
  category: 'Components',
  subtitle: '图片',
  type: 'Data Display',
  title: 'Image',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <Basic />
          <Fallback />
          <Placeholder />
          <PreviewGroup />
        </demo-sort>
        <api vSlots={{ cn: () => <CN /> }}>
          <US />
        </api>
      </div>
    );
  },
};
</script>
<style></style>
