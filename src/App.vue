<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, Ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useMediaQuery from './hooks/useMediaQuery';
import { GLOBAL_CONFIG } from './SymbolKey';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
function isZhCN(name: string) {
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
    watch(
      globalConfig.isZhCN,
      val => {
        if (val) {
          moment.locale(zhCN.locale);
        } else {
          moment.locale(enUS.locale);
        }
      },
      { immediate: true },
    );
    const locale = computed(() => {
      return globalConfig.isZhCN.value ? zhCN : enUS;
    });

    return { globalConfig, locale };
  },
});
</script>
