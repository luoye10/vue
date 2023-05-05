<template>
  <div id="app">
    <collapse-page></collapse-page>
    <layer-page></layer-page>
    <floor-page></floor-page>
    <drop-down></drop-down>
    <text-ellipsis></text-ellipsis>
    <text-page></text-page>
    <show-tip @input="hand" :value="show">
      <template #head>
        <div class="title">这是一个标题</div>
      </template>
    </show-tip>
    <button @click="change">按钮</button>
    <file-upload></file-upload>
  </div>
</template>
<script>
import CollapsePage from './components/CollapsePage.vue';
import LayerPage from './components/LayerPage.vue';
import FloorPage from './components/FloorPage.vue';
import DropDown from './components/DropDown.vue';
import TextEllipsis from './components/TextEllipsis.vue';
import ShowTip from './components/ShowTip.vue';
import TextPage from './components/TextPage.vue';
import FileUpload from './components/FileUpload.vue';
export default {
  components: {
    CollapsePage,
    LayerPage,
    FloorPage,
    DropDown,
    TextEllipsis,
    ShowTip,
    TextPage,
    FileUpload,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    change() {
      this.show = true;
    },
    hand(v) {
      this.show = v;
    },
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
