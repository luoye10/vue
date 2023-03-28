<template>
  <div class="box">
    <div class="text">基础用法</div>
    <div
      :class="['test', { active: isHover }, { add: isAdd }]"
      @mouseenter="open"
      @mouseout="recover"
      @click="add"
    >
      找个地方休息
    </div>
    <transition name="zyh">
      <ul class="itemList" v-show="isShow">
        <li class="item" v-for="item in items" :key="item.massage">
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        '滨海湾金沙，新加坡',
        '布朗酒店，伦敦',
        '亚特兰蒂斯巴哈马，拿骚',
        '比利福山庄酒店，洛杉矶',
      ],
      isShow: false,
      isHover: false,
      isAdd: false,
    };
  },
  methods: {
    open() {
      this.isHover = true;
      this.isShow = true;
    },
    recover() {
      this.isHover = false;
      this.isShow = false;
    },
    add() {
      this.isAdd = true;
      setTimeout(() => {
        this.isAdd = false;
      }, 100);
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
  margin: 20px;
  .test {
    width: 120px;
    height: 40px;
    border: 1px solid #dadada;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.2s;
  }
  .itemList {
    width: 200px;
    height: 150px;
    background: whitesmoke;
    border-radius: 3px;
    padding: 10px;
    margin-top: -10px;
    margin-left: -20px;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      margin: 10px;
      cursor: pointer;
    }
  }
  .active {
    border: 1px solid greenyellow;
    color: greenyellow;
  }
  .add {
    box-shadow: 0 0 2px 2px greenyellow;
  }
  .zyh-enter-active,
  .zyh-leave-active {
    transition: opacity 0.5s;
  }
  .zyh-enter,
  .zyh-leave-to {
    opacity: 0;
  }
}
</style>
