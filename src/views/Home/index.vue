<template>
  <div class="home-container">
    <Header />
    <div class="home-banner">
      <div class="home-banner-holder">
        <div class="home-banner-content">
          <div class="home-banner-title">
            <img height="70" :src="logo" />
            Ant Design Vue
          </div>
          <p>
            {{ $t('app.home.introduce') }}
          </p>
          <div class="home-banner-content-operations">
            <router-link :to="getLocalizedPathname('/docs/vue/introduce', isZhCN)">
              <a-button type="primary" shape="round">
                {{ $t('app.home.getting-started') }}
              </a-button>
            </router-link>
            <a href="https://github.com/vueComponent/ant-design-vue" target="_blank">
              <a-button shape="round" ghost>GITHUB</a-button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sponsor">
      <h2>{{ $t('app.sponsor') }}</h2>
      <ul>
        <li class="sponsor-item">
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../../layouts/header/index.vue';
import Footer from '../../layouts/Footer.vue';
import { defineComponent, inject } from 'vue';
import { getLocalizedPathname } from '@/utils/util';
import logo from '../../assets/logo.svg';
import { GLOBAL_CONFIG } from '@/SymbolKey';
export default defineComponent({
  setup() {
    const globalConfig = inject(GLOBAL_CONFIG);
    return {
      getLocalizedPathname,
      isZhCN: globalConfig.isZhCN,
      logo,
    };
  },
  components: {
    Header,
    Footer,
  },
});
</script>
<style lang="less" src="./index.less"></style>
