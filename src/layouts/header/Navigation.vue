<template>
  <a-menu class="menu-site" :mode="menuMode" :selectedKeys="[activeMenuItem]" id="nav">
    <a-menu-item key="docs/vue">
      <router-link :to="getLocalizedPathname('/docs/vue/introduce', isZhCN)">
        {{ $t('app.header.menu.documentation') }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="components">
      <router-link :to="getLocalizedPathname('/components/overview/', isZhCN)">
        {{ $t('app.header.menu.components') }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="store">
      <a
        href="https://store.antdv.com/pro/"
        target="_blank"
        rel="noopener noreferrer"
        style="position: relative"
      >
        {{ $t('app.header.menu.store') }}
        <a-badge color="red" style="position: absolute; top: -10px; right: -10px" />
      </a>
    </a-menu-item>
    <a-menu-item v-if="isZhCN" key="geektime">
      <a
        href="https://time.geekbang.org/course/intro/100024601?code=KHKYcoBU6vZa8nMglg7AWfDxxi3BWrz9INAzAY3umPk%3D"
        target="_blank"
        rel="noopener noreferrer"
        style="position: relative"
      >
        实战课程
        <a-badge color="red" style="position: absolute; top: -10px; right: -10px" />
      </a>
    </a-menu-item>
    <template v-if="isMobile">
      <a-menu-item key="switch-lang" @click="$emit('langChange')">
        {{ $t('app.header.lang') }}
      </a-menu-item>
      <a-menu-item key="github">
        <a
          href="https://github.com/vueComponent/ant-design-vue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { getLocalizedPathname } from '@/utils/util';
import { computed, defineComponent, inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  emits: ['langChange'],
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const menuMode = computed(() => {
      return globalConfig!.isMobile.value ? 'inline' : 'horizontal';
    });
    const route = useRoute();
    const activeMenuItem = ref('home');
    watch(
      () => route.path,
      pathname => {
        const modules = pathname.split('/');
        console.log(modules);
        if (pathname === 'changelog' || pathname === 'changelog-cn') {
          activeMenuItem.value = 'docs/vue';
        } else if (pathname === '/docs/resources' || pathname === '/docs/resources-cn') {
          activeMenuItem.value = 'docs/resources';
        } else if (modules[1] === 'components') {
          activeMenuItem.value = 'components';
        } else if (modules[1] === 'docs') {
          activeMenuItem.value = `${modules[1]}/${modules[2]}`;
        } else {
          activeMenuItem.value = 'home';
        }
      },
      { immediate: true },
    );
    return {
      isMobile: globalConfig!.isMobile,
      isZhCN: globalConfig!.isZhCN,
      getLocalizedPathname,
      menuMode,
      activeMenuItem,
    };
  },
});
</script>
<style lang="less" scoped>
@import '../../theme/static/theme.less';
@import './index.less';

#nav {
  height: 100%;
  font-size: 14px;
  font-family: Avenir, @font-family, sans-serif;
  border: 0;

  &.ant-menu-horizontal {
    border-bottom: none;

    & > .ant-menu-item,
    & > .ant-menu-submenu {
      min-width: 40px;
      height: @header-height;
      margin-right: 12px;
      margin-left: 12px;
      line-height: @header-height - @menu-item-border - 2px;
      border-top: @menu-item-border solid transparent;
      padding: 0;

      &:hover {
        border-top: @menu-item-border solid @primary-color;
        border-bottom: @menu-item-border solid transparent;
      }
    }

    & .ant-menu-submenu-title .anticon {
      margin: 0;
    }

    & > .ant-menu-submenu-open {
      border-top: @menu-item-border solid @primary-color;
      border-bottom: @menu-item-border solid transparent;
    }

    & > .ant-menu-item-selected {
      border-top: @menu-item-border solid @primary-color;
      border-bottom: @menu-item-border solid transparent;
      a {
        color: @primary-color;
      }
    }
  }

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    text-align: center;
  }
}

.header-link {
  color: @site-text-color;
}

.ant-menu-item-active .header-link {
  color: @primary-color;
}
</style>
