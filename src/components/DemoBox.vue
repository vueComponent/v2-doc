<template>
  <div>
    <slot name="component" />
    <div>{{ sourceCode }}</div>
    <slot name="description" />
    <slot name="us-description" />
  </div>
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
