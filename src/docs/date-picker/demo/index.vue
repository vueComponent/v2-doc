<template>
  <demo-sort>
    <Basic />
    <Format />
    <Time />
    <Disabled />
    <DisabledDate />
    <SelectInRnage />
    <PresettedRanges />
    <ExtraFooter />
    <Size />
    <DateRender />
    <Mode />
    <StartEnd />
    <Text />
    <Suffix />
  </demo-sort>
</template>
<script>
import Basic from './basic.vue';
import DateRender from './date-render.vue';
import DisabledDate from './disabled-date.vue';
import Disabled from './disabled.vue';
import ExtraFooter from './extra-footer.vue';
import Format from './format.vue';
import Mode from './mode.vue';
import PresettedRanges from './presetted-ranges.vue';
import SelectInRnage from './select-in-range.vue';
import Size from './size.vue';
import StartEnd from './start-end.vue';
import Time from './time.vue';
import Suffix from './suffix.vue';
import Text from './text.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    DateRender,
    DisabledDate,
    Disabled,
    ExtraFooter,
    Format,
    Mode,
    PresettedRanges,
    Size,
    StartEnd,
    Time,
    Suffix,
    Text,
    SelectInRnage,
  },
});
</script>
<style>
#components-date-picker-demo .ant-calendar-picker {
  margin: 0 8px 12px 0;
}
</style>
