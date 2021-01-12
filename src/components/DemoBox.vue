<template>
  <slot name="component" />
  <code v-show="false" v-html="htmlCode"></code>
  <slot name="description" />
  <slot name="us-description" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    jsfiddle: Object,
    isIframe: Boolean,
  },
  setup(props) {
    console.log(props.jsfiddle);
    return {
      sourceCode: decodeURIComponent(escape(window.atob(props.jsfiddle.sourceCode))),
      htmlCode: decodeURIComponent(escape(window.atob(props.jsfiddle.htmlCode))),
    };
  },
});
</script>

<style></style>
