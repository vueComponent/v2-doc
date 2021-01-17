<template>
  <a-menu class="menu-site" :mode="menuMode" :selectedKeys="[activeMenuItem]" id="nav">
    <a-menu-item key="docs/spec">
      <router-link :to="{ path: getLocalizedPathname('/docs/spec/introduce', isZhCN) }">
        {{ $t('app.header.menu.spec') }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="docs/vue">
      <router-link :to="{ path: getLocalizedPathname('/docs/vue/introduce', isZhCN) }">
        {{ $t('app.header.menu.documentation') }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="components">
      <router-link :to="{ path: getLocalizedPathname('/components/overview/', isZhCN) }">
        {{ $t('app.header.menu.components') }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="docs/resources">
      <router-link :to="{ path: getLocalizedPathname('/docs/resources', isZhCN) }">
        {{ $t('app.header.menu.resource') }}
      </router-link>
    </a-menu-item>
    {additional}
  </a-menu>
</template>
<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { getLocalizedPathname } from '@/utils/util';
import { computed, defineComponent, inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const menuMode = computed(() => {
      return globalConfig.isMobile.value ? 'inline' : 'horizontal';
    });
    const route = useRoute();
    const activeMenuItem = ref('home');
    watch(
      () => route.path,
      pathname => {
        const module = pathname.split('/').slice(0, -1).join('/');
        activeMenuItem.value = module || 'home';
        if (location.pathname === 'changelog' || location.pathname === 'changelog-cn') {
          activeMenuItem.value = 'docs/vue';
        } else if (
          location.pathname === 'docs/resources' ||
          location.pathname === 'docs/resources-cn'
        ) {
          activeMenuItem.value = 'docs/resources';
        }
      },
      { immediate: true },
    );
    return {
      isZhCN: globalConfig.isZhCN,
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

// Popover menu is only used for mobile
.popover-menu {
  width: 300px;

  .ant-popover-inner-content {
    padding: 0;

    #nav {
      .ant-menu-item,
      .ant-menu-submenu {
        text-align: left;
      }

      .ant-menu-item-group-title {
        padding-left: 24px;
      }

      .ant-menu-item-group-list {
        padding: 0 16px;
      }

      .ant-menu-item,
      a {
        color: #333;
      }
    }
  }
}
</style>
