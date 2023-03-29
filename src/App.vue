<template>
  <div id="app">
    <collapse-page></collapse-page>
    <layer-page></layer-page>
    <floor-page></floor-page>
    <drop-down></drop-down>
    <text-ellipsis></text-ellipsis>
  </div>
</template>
<script>
import CollapsePage from './components/CollapsePage.vue';
import LayerPage from './components/LayerPage.vue';
import FloorPage from './components/FloorPage.vue';
import DropDown from './components/DropDown.vue';
import TextEllipsis from './components/TextEllipsis.vue';
export default {
  components: {
    CollapsePage,
    LayerPage,
    FloorPage,
    DropDown,
    TextEllipsis,
  },
  mounted() {
    console.log(this.BigNumber.plus(0.1).plus(0.2).toNumber());
  },
};
</script>
<style lang="less" scoped>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
