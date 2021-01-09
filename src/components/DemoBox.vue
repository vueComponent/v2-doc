<template>
  <slot name="component" />
  <code>{{ sourceCode }}</code>
  <slot name="description" />
  <slot name="us-description" />
</template>

<script>
export default {
  props: {
    jsfiddle: Object,
    isIframe: Boolean,
  },
  setup(props) {
    return {
      sourceCode: decodeURIComponent(
        escape(window.atob(props.jsfiddle.sourceCode))
      ),
    };
  },
};
</script>

<style></style>
