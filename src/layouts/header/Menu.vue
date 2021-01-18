<template>
  <Navigation @langChange="onLangChange" />
  <template v-if="isMobile">
    <Ecosystem />
  </template>
  <template v-else>
    <a-select
      key="version"
      class="version"
      size="small"
      :defaultValue="antdVersion"
      :getPopupContainer="trigger => trigger.parentNode"
    >
      <a-select-option :value="antdVersion">{{ antdVersion }}</a-select-option>
      <a-select-option value="1.x" @click="() => (location.href = 'https://1x.antdv.com')">
        1.x
      </a-select-option>
    </a-select>
    <a-button
      size="small"
      @click="onLangChange"
      class="header-button header-lang-button"
      key="lang-button"
    >
      {{ $t('app.header.lang') }}
    </a-button>
    <More />
    <Github />
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Github from './Github.vue';
import More from './More.vue';
import Navigation from './Navigation.vue';
import Ecosystem from './Ecosystem.vue';
import { version } from 'ant-design-vue';
import { isZhCN, isLocalStorageNameSupported, getLocalizedPathname } from '@/utils/util';
export default defineComponent({
  name: 'HeaderMenu',
  props: ['isMobile'],
  setup() {
    const antdVersion = ref(version);
    const onLangChange = () => {
      const {
        location: { pathname },
      } = window;
      const currentProtocol = `${window.location.protocol}//`;
      const currentHref = window.location.href.substr(currentProtocol.length);

      if (isLocalStorageNameSupported()) {
        localStorage.setItem('locale', isZhCN(pathname) ? 'en-US' : 'zh-CN');
      }

      window.location.href =
        currentProtocol +
        currentHref.replace(
          window.location.pathname,
          getLocalizedPathname(pathname, !isZhCN(pathname)).path,
        );
    };
    return {
      onLangChange,
      antdVersion,
    };
  },
  components: {
    Navigation,
    Github,
    More,
    Ecosystem,
  },
});
</script>
<style lang="less" scoped></style>