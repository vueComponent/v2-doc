<template>
  <Header />
  <div class="main-wrapper">
    <a-row>
      <template v-if="isMobile">
        <a-drawer key="Mobile-menu" wrapperClassName="drawer-wrapper">
          <Menu :menus="menus" :activeMenuItem="activeMenuItem" />
        </a-drawer>
      </template>
      <template v-else>
        <a-col :xxl="4" :xl="5" :lg="6" :md="6" :sm="24" :xs="24" class="main-menu">
          <a-affix>
            <section class="main-menu-inner">
              <Menu :menus="menus" :activeMenuItem="activeMenuItem" />
            </section>
          </a-affix>
        </a-col>
      </template>
      <a-col :xxl="20" :xl="19" :lg="18" :md="18" :sm="24" :xs="24">
        <section :class="mainContainerClass">
          <router-view />
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
import { defineComponent, inject, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './header/index.vue';
import Footer from './Footer.vue';
import Menu from './Menu.vue';
import PrevAndNext from './PrevAndNext.vue';
export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routes = router.getRoutes();
    const menus = computed(() => {
      const path = route.path;
      const category = path.split('/')[1];
      return routes
        .filter(r => r.meta && r.meta.category === category)
        .map(r => ({ ...r.meta, path: r.path.split(':lang')[0] }));
    });

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

    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    return {
      isMobile: globalConfig.isMobile,
      mainContainerClass: {
        'main-container': true,
        'main-container-component': isDemo.value,
      },
      menus,
      currentMenuIndex,
      activeMenuItem,
    };
  },
  components: {
    Header,
    Footer,
    Menu,
    PrevAndNext,
  },
});
</script>
<style lang="less" scoped></style>
