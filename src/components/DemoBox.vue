<template>
  <section class="code-box" :id="sectionId">
    <section class="code-box-demo">
      <slot />
    </section>
    <section class="code-box-meta markdown">
      <div class="code-box-title">
        <a :href="`#${sectionId}`">{{ title }}</a>
      </div>
      <div class="code-box-description">
        <slot v-if="isZhCN" name="description" />
        <slot v-else name="us-description" />
      </div>
      <div class="code-box-actions">
        <a-tooltip :title="$t(`app.demo.type.${type ? 'js' : 'ts'}`)">
          <span
            class="code-expand-icon code-box-code-action"
            style="width: auto"
            @click="handleChangeType"
          >
            {{ type }}
          </span>
        </a-tooltip>
        <a-tooltip
          :title="$t(`app.demo.${copied ? 'copied' : 'copy'}`)"
          :visible="copyTooltipVisible"
          @visibleChange="onCopyTooltipVisibleChange"
        >
          <component
            v-clipboard:copy="type === 'TS' ? sourceCode : jsSourceCode"
            v-clipboard:success="handleCodeCopied"
            :is="copied && copyTooltipVisible ? 'CheckOutlined' : 'SnippetsOutlined'"
            class="code-box-code-copy code-box-code-action"
          />
        </a-tooltip>
        <a-tooltip :title="$t(`app.demo.code.${codeExpand ? 'hide' : 'show'}`)">
          <span class="code-expand-icon code-box-code-action">
            <img
              alt="expand code"
              :src="
                theme === 'dark'
                  ? 'https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg'
                  : 'https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg'
              "
              :class="codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'"
              @click="handleCodeExpand"
            />
            <img
              alt="expand code"
              :src="
                theme === 'dark'
                  ? 'https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg'
                  : 'https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg'
              "
              :class="codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'"
              @click="handleCodeExpand"
            />
          </span>
        </a-tooltip>
      </div>
    </section>
    <section :class="highlightClass">
      <div class="highlight">
        <slot v-if="type === 'TS'" name="htmlCode" />
        <slot v-else name="jsVersionHtml" />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import { CheckOutlined, SnippetsOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  props: {
    jsfiddle: Object,
    isIframe: Boolean,
  },
  setup(props) {
    const codeExpand = ref(false);
    const type = ref('TS');
    const copyTooltipVisible = ref(false);
    const copied = ref(false);
    const sectionId = computed(() => {
      const relativePath = props.jsfiddle?.relativePath || '';
      return `components-${relativePath
        .split('/docs/')[1]
        .split('/')
        .join('-')
        .replace('.vue', '')}`;
    });
    const addDemosInfo: any = inject('addDemosInfo');

    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG) as any;
    const title = computed(
      () => props.jsfiddle?.title[globalConfig.isZhCN.value ? 'zh-CN' : 'en-US'],
    );
    const onCopyTooltipVisibleChange = (visible: boolean) => {
      if (visible) {
        copyTooltipVisible.value = visible;
        copied.value = false;
      } else {
        copyTooltipVisible.value = visible;
      }
    };
    const handleCodeExpand = () => {
      codeExpand.value = !codeExpand.value;
    };
    const handleCodeCopied = () => {
      copied.value = true;
    };
    const handleChangeType = () => {
      type.value = type.value === 'TS' ? 'JS' : 'TS';
    };
    const highlightClass = computed(() => {
      return {
        'highlight-wrapper': true,
        'highlight-wrapper-expand': codeExpand.value,
      };
    });
    onMounted(() => {
      addDemosInfo({
        href: `#${sectionId.value}`,
        title,
      });
    });
    return {
      theme: 'light',
      type,
      isZhCN: globalConfig.isZhCN,
      sectionId,
      title,
      codeExpand,
      copyTooltipVisible,
      copied,
      onCopyTooltipVisibleChange,
      handleCodeExpand,
      handleCodeCopied,
      handleChangeType,
      highlightClass,
      sourceCode: decodeURIComponent(escape(window.atob(props.jsfiddle?.sourceCode))),
      jsSourceCode: decodeURIComponent(escape(window.atob(props.jsfiddle?.jsSourceCode))),
    };
  },
  components: {
    CheckOutlined,
    SnippetsOutlined,
  },
});
</script>

<style></style>
