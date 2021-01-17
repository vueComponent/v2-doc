<template>
  <header id="header" :class="headerClassName">
    <a-row :style="{ flexFlow: 'nowrap', height: 64 }">
      <a-col v-bind="colProps[0]">
        <Logo />
      </a-col>
      <a-col v-bind="colProps[1]" class="menu-a-row"></a-col>
    </a-row>
  </header>
</template>
<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { getLocalizedPathname } from '@/utils/util';
import { computed, defineComponent, inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './Logo.vue';
export default defineComponent({
  setup() {
    const route = useRoute();
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const isHome = computed(() => {
      return ['', 'index', 'index-cn'].includes(route.path);
    });
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
    return {
      isZhCN: globalConfig.isZhCN,
      isMobile: globalConfig.isMobile,
      getLocalizedPathname,
      headerClassName: {
        clearfix: true,
        'home-header': isHome.value,
      },
      colProps,
    };
  },
  components: {
    Logo,
  },
});
</script>
<style lang="less" scoped src="./index.less"></style>
