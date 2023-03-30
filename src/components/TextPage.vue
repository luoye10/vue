<template>
  <div class="container">
    <div class="word">{{ word }}</div>
    <div :class="['text', { active: isShow }]" @click="show">{{ text }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      word: '展开方式',
      text: '电灯熄灭 物换星移 泥牛入海 黑暗好像 一颗巨石 按在胸口 独脚大盗 百万富翁 摸爬滚打 黑暗好像 一颗巨石 按在胸口',
      isShow: true,
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 300px;
  border: 1px solid #dadada;
  padding: 20px;
  margin: 20px;
  .word {
    height: 40px;
  }
  .text {
    width: 220px;
    line-height: 30px;
    margin: 10px 0;
    cursor: pointer;
  }
  .active {
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
