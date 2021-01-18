<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, provide, Ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useMediaQuery from './hooks/useMediaQuery';
import { GLOBAL_CONFIG } from './SymbolKey';
function isZhCN(name) {
  return /-cn\/?$/.test(name);
}
export interface GlobalConfig {
  isMobile: Ref<boolean>;
  lang: Ref<'zh-CN' | 'en-US'>;
  isZhCN: Ref<boolean>;
  responsive: Ref<null | 'narrow' | 'crowded'>;
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const i18n = useI18n();
    const colSize = useMediaQuery();
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs');
    const responsive = computed(() => {
      if (colSize.value === 'xs') {
        return 'crowded';
      } else if (colSize.value === 'sm') {
        return 'narrow';
      }
      return null;
    });
    const globalConfig: GlobalConfig = {
      isMobile,
      responsive,
      lang: computed(() => i18n.locale.value as any),
      isZhCN: computed(() => i18n.locale.value === 'zh-CN'),
    };
    provide(GLOBAL_CONFIG, globalConfig);
    watch(
      () => route.path,
      val => {
        i18n.locale.value = isZhCN(val) ? 'zh-CN' : 'en-US';
      },
      { immediate: true },
    );

    return { globalConfig };
  },
});
</script>
