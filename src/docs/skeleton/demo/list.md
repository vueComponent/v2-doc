<cn>
#### 列表
在列表组件中使用加载占位符。
</cn>

<us>
#### List
Use skeleton in list component.
</us>

```vue
<template>
  <div>
    <a-switch :checked="!loading" @change="onChange" />
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item, index }">
        <a-list-item key="item.title">
          <template v-if="!loading" #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component v-bind:is="type" style="margin-right: 8px"></component>
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              v-if="!loading"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-skeleton :loading="loading" active avatar>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
              <template #avatar><a-avatar :src="item.avatar"/></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  data() {
    return {
      loading: true,
      listData,
      actions: [
        { type: 'star-outlined', text: '156' },
        { type: 'like-outlined', text: '156' },
        { type: 'message-outlined', text: '2' },
      ],
    };
  },
  methods: {
    onChange(checked) {
      this.loading = !checked;
    },
  },
};
</script>
<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
```
