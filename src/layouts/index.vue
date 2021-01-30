<template>
  <Header />
  <div class="main-wrapper">
    <a-row>
      <template v-if="isMobile">
        <a-drawer key="Mobile-menu" wrapperClassName="drawer-wrapper">
          <Menu :menus="menus" :activeMenuItem="activeMenuItem" :isZhCN="isZhCN" />
        </a-drawer>
      </template>
      <template v-else>
        <a-col :xxl="4" :xl="5" :lg="6" :md="6" :sm="24" :xs="24" class="main-menu">
          <a-affix>
            <section class="main-menu-inner">
              <Menu :menus="menus" :activeMenuItem="activeMenuItem" :isZhCN="isZhCN" />
            </section>
          </a-affix>
        </a-col>
      </template>
      <a-col :xxl="20" :xl="19" :lg="18" :md="18" :sm="24" :xs="24">
        <section :class="mainContainerClass">
          <Demo v-if="isDemo" :pageData="pageData" :isZhCN="isZhCN">
            <component :is="matchCom" />
          </Demo>
          <router-view v-else />
          <a-affix v-if="headers.length" class="toc-affix" :offsetTop="20">
            <a-anchor>
              <a-anchor-link
                v-for="h in headers"
                :key="h.title"
                :href="h.href || `#${h.title}`"
                :title="h.title"
              ></a-anchor-link>
            </a-anchor>
          </a-affix>
        </section>
        <PrevAndNext :menus="menus" :currentMenuIndex="currentMenuIndex" />
        <Footer />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { defineComponent, inject, computed, ref, provide, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './header/index.vue';
import Footer from './Footer.vue';
import Menu from './Menu.vue';
import PrevAndNext from './PrevAndNext.vue';
import Demo from './Demo.vue';
export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routes = router.getRoutes();
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const menus = computed(() => {
      const path = route.path;
      const category = path.split('/')[1];
      return routes
        .filter(r => r.meta && r.meta.category && r.meta.category.toLowerCase() === category)
        .map(r => ({ ...r.meta, path: r.path.split(':lang')[0] }));
    });

    const demos = ref<any[]>([]);

    provide('addDemosInfo', (info: any) => {
      if (!demos.value.find(d => d.href === info.href)) {
        demos.value.push(info);
      }
    });

    watch(
      () => route.path,
      () => {
        demos.value.length = 0;
      },
    );

    const activeMenuItem = computed(() => {
      return route.path.split('-cn')[0];
    });
    const currentMenuIndex = computed(() => {
      return menus.value.findIndex(m => m.path === activeMenuItem.value);
    });

    const isDemo = computed(() => {
      return (
        route.path.indexOf('/components') === 0 && route.path.indexOf('/components/overview') !== 0
      );
    });
    const matchCom = computed(() => {
      return route.matched[route.matched.length - 1]?.components?.default as any;
    });
    const isZhCN = globalConfig!.isZhCN;
    const pageData = computed(() =>
      isDemo.value
        ? matchCom.value[isZhCN.value ? 'CN' : 'US']?.pageData
        : matchCom.value?.pageData,
    );
    const headers = computed(() => {
      if (isDemo.value) {
        return [...demos.value, { title: 'API', href: '#API' }];
      } else {
        return (pageData.value?.headers || []).filter((h: Header) => h.level === 2);
      }
    });

    const mainContainerClass = computed(() => {
      return {
        'main-container': true,
        'main-container-component': isDemo.value,
      };
    });
    return {
      isMobile: globalConfig!.isMobile,
      isZhCN,
      mainContainerClass,
      menus,
      currentMenuIndex,
      activeMenuItem,
      headers,
      isDemo,
      matchCom,
      pageData,
    };
  },
  components: {
    Demo,
    Header,
    Footer,
    Menu,
    PrevAndNext,
  },
});
</script>
<style lang="less" scoped>
.toc-affix ::v-deep(.ant-anchor) {
  font-size: 12px;
  max-width: 110px;
  .ant-anchor-link {
    border-left: 2px solid #f0f0f0;
    padding: 4px 0 4px 16px;
  }

  .ant-anchor-link-active {
    border-left: 2px solid #1890ff;
  }
  .ant-anchor-ink::before {
    display: none;
  }
  .ant-anchor-ink-ball {
    display: none;
  }
}
</style>
