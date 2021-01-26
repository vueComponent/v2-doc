<docs>
---
order: 2
title:
  zh-CN: 加载更多
  en-US: Load more
---

## zh-CN

可通过 `loadMore` 属性实现加载更多功能。

## en-US

Load more list with `loadMore` property.

</docs>

<template>
  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="data"
  >
    <template #loadMore>
      <div
        v-if="showLoadingMore"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      >
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="onLoadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
        <div>content</div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import axios, { AxiosResponse } from 'axios';
import { defineComponent, ref, onMounted, nextTick } from 'vue';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default defineComponent({
  setup() {
    const loading = ref<boolean>(true);
    const loadingMore = ref<boolean>(false);
    const showLoadingMore = ref<boolean>(true);
    const data = ref([]);

    onMounted(() => {
      getData((res: AxiosResponse) => {
        loading.value = false;
        data.value = res.data.results;
      });
    });

    const getData = async (callback: (r: AxiosResponse) => void) => {
      const res = await axios({
        url: fakeDataUrl,
        method: 'get',
      });
      callback(res);
    };

    const onLoadMore = () => {
      loadingMore.value = true;
      getData((res: AxiosResponse) => {
        data.value = data.value.concat(res.data.results);
        loadingMore.value = false;
        nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    };
    return {
      loading,
      loadingMore,
      showLoadingMore,
      data,
      onLoadMore,
    };
  },
});
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
