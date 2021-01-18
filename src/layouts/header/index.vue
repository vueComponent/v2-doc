<template>
  <header id="header" :class="headerClassName">
    <a-popover
      overlayClassName="popover-menu"
      placement="bottomRight"
      trigger="click"
      arrowPointAtCenter
      v-model:visible="menuVisible"
    >
      <UnorderedListOutlined class="nav-phone-icon" />
      <template v-slot:content>
        <Menu :isMobile="isMobile" />
      </template>
    </a-popover>
    <a-row :style="{ flexFlow: 'nowrap', height: 64 }">
      <a-col v-bind="colProps[0]">
        <Logo />
      </a-col>
      <a-col v-bind="colProps[1]" class="menu-row">
        <SearchBox
          key="search"
          :isZhCN="isZhCN"
          :responsive="responsive"
          @triggerFocus="onTriggerSearching"
        />
        <Menu v-if="!isMobile" />
      </a-col>
    </a-row>
  </header>
</template>
<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { getLocalizedPathname } from '@/utils/util';
import { computed, defineComponent, inject, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import { UnorderedListOutlined } from '@ant-design/icons-vue';
import SearchBox from './SearchBox.vue';
export default defineComponent({
  setup() {
    const route = useRoute();
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const isHome = computed(() => {
      return ['', 'index', 'index-cn'].includes(route.path);
    });

    const menuVisible = ref(false);
    const colProps = isHome.value
      ? [{ flex: 'none' }, { flex: 'auto' }]
      : [
          {
            xxl: 4,
            xl: 5,
            lg: 6,
            md: 6,
            sm: 24,
            xs: 24,
          },
          {
            xxl: 20,
            xl: 19,
            lg: 18,
            md: 18,
            sm: 0,
            xs: 0,
          },
        ];
    const searching = ref(false);
    const onTriggerSearching = (value: boolean) => {
      searching.value = value;
    };
    const initDocSearch = () => {
      window.docsearch({
        apiKey: '92003c1d1d07beef165b08446f4224a3',
        indexName: 'antdv',
        inputSelector: '#search-box input',
        algoliaOptions: { facetFilters: [`tags:${globalConfig.isZhCN.value ? 'cn' : 'en'}`] },
        transformData(hits) {
          hits.forEach(hit => {
            hit.url = hit.url.replace('www.antdv.com', window.location.host);
            hit.url = hit.url.replace('https:', window.location.protocol);
          });
          return hits;
        },
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    };
    onMounted(() => {
      setTimeout(() => {
        initDocSearch();
      });
    });
    return {
      isZhCN: globalConfig.isZhCN,
      isMobile: globalConfig.isMobile,
      responsive: globalConfig.responsive,
      getLocalizedPathname,
      headerClassName: {
        clearfix: true,
        'home-header': isHome.value,
      },
      colProps,
      menuVisible,
      onTriggerSearching,
    };
  },
  components: {
    Logo,
    Menu,
    UnorderedListOutlined,
    SearchBox,
  },
});
</script>
<style lang="less" src="./index.less"></style>
