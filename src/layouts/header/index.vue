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
import { computed, defineComponent, inject, onMounted, Ref, ref, watch } from 'vue';
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
    const showTopBanner = ref(!localStorage.getItem('notification-key-surelyform'));
    const handleClose = key => {
      localStorage.removeItem(`notification-key-${key}`);
      localStorage.setItem(`notification-key-${key}`, key);
      showTopBanner.value = false;
    };
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
        algoliaOptions: { facetFilters: [`tags:${globalConfig!.isZhCN.value ? 'cn' : 'en'}`] },
        transformData(hits: any[]) {
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
    const visibleAdblockBanner = ref(false);
    watch(globalConfig?.blocked as Ref<boolean>, val => {
      visibleAdblockBanner.value = val;
    });
    return {
      isZhCN: globalConfig!.isZhCN,
      isMobile: globalConfig!.isMobile,
      responsive: globalConfig!.responsive,
      getLocalizedPathname,
      visibleAdblockBanner,
      headerClassName: {
        clearfix: true,
        'home-header': isHome.value,
      },
      colProps,
      menuVisible,
      onTriggerSearching,
      showTopBanner,
      handleClose,
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
<style scope>
.adblock-banner {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}

.global-notification-close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
.global-notification {
  text-align: center;
  background: #001529;
  padding: 20px 0;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  z-index: 99;
}
.global-notification a {
  color: #177ddc;
}
</style>
