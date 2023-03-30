<template>
  <div class="container">
    <div class="word">{{ word }}</div>
    <div class="text" @mouseover="show" @mouseout="hide">{{ text }}</div>
    <div class="show" v-show="isShow" @mouseover="show" @mouseout="hide">
      <div class="item">{{ text }}</div>
      <div class="list"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      word: '基础',
      text: '住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪',
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 200px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #dadada;
  border-radius: 3px;
  .word {
    height: 50px;
  }
  .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .show {
    margin-left: -200px;
    margin-top: -70px;
    position: relative;
  }
  .item {
    width: 600px;
    height: 40px;
    background: black;
    color: white;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
  }
  .list {
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 100%;
    margin-left: 80px;
  }
}
</style>
