<template>
  <div class="box">
    <div class="text">基础用法</div>
    <div class="test" @mouseenter="open" ref="test" @mouseout="recover">
      找个地方休息
    </div>
    <ul class="itemList" v-show="isShow">
      <li class="item" v-for="item in items" :key="item.massage" @click="show">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        '布朗酒店，伦敦',
        '亚特兰蒂斯巴哈马，拿骚',
        '比利福山庄酒店，洛杉矶',
      ],
      isShow: false,
    };
  },
  methods: {
    open() {
      this.$refs.test.classList.add('active');
      this.isShow = true;
    },
    recover() {
      this.$refs.test.classList.remove('active');
      this.isShow = false;
    },
    show() {},
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 300px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #dadada;
  padding: 20px;
  margin: 10px;
  position: absolute;
  top: 0;
  right: 0;
  .test {
    width: 100px;
    border: 1px solid #dadada;
    border-radius: 3px;
    padding: 10px;
    margin: 30px 0;
    cursor: pointer;
  }
  .itemList {
    width: 200px;
    height: 150px;
    background: whitesmoke;
    border-radius: 3px;
    padding: 10px;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      margin: 10px;
      cursor: pointer;
    }
  }
}
.active {
  border: 1px solid greenyellow;
  color: greenyellow;
}
</style>
