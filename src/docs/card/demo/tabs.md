<cn>
  #### 带页签的卡片
  可承载更多内容
</cn>

<us>
  #### With tabs
  More content can be hosted
</us>

```vue
<template>
  <a-card
    style="width:100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template #customRender="item">
      <span> <home-outlined />{{ item.key }} </span>
    </template>
    <template #extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </a-card>
  <br /><br />
  <a-card
    style="width:100%"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="key => onTabChange(key, 'noTitleKey')"
  >
    <p v-if="noTitleKey === 'article'">
      article content
    </p>
    <p v-else-if="noTitleKey === 'app'">
      app content
    </p>
    <p v-else="noTitleKey === 'project'">
      project content
    </p>
    <template #tabBarExtraContent>
      <a href="#">More</a>
    </template>
  </a-card>
</template>

<script>
import { HomeOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    HomeOutlined,
  },
  data() {
    return {
      tabList: [
        {
          key: 'tab1',
          // tab: 'tab1',
          slots: { tab: 'customRender' },
        },
        {
          key: 'tab2',
          tab: 'tab2',
        },
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
      },
      tabListNoTitle: [
        {
          key: 'article',
          tab: 'article',
        },
        {
          key: 'app',
          tab: 'app',
        },
        {
          key: 'project',
          tab: 'project',
        },
      ],
      key: 'tab1',
      noTitleKey: 'app',
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
</script>
```
