<template>
  <div><router-view /></div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useMediaQuery from './hooks/useMediaQuery';
function isZhCN(name) {
  return /-cn\/?$/.test(name);
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const i18n = useI18n();
    const colSize = useMediaQuery();
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs');
    const globalConfig = { isMobile, lang: computed(() => i18n.locale.value) };
    provide('globalConfig', globalConfig);
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
