<template>
  <div class="box">
    <div class="text">基础用法</div>
    <div
      :class="['test', { active: isHover }, { add: isAdd }]"
      @mouseover="open"
      @mouseout="recover"
      @click="add"
    >
      找个地方休息
    </div>
    <transition name="zyh">
      <ul
        class="itemList"
        v-show="isShow"
        @mouseover="open"
        @mouseout="recover"
      >
        <li
          :class="['item', { background: item.isAppend }]"
          v-for="(item, index) in items"
          :key="item.massage"
          @mouseover="append(item)"
          @mouseout="remove(item)"
          @click="show(index)"
        >
          {{ item.text }}
        </li>
      </ul>
    </transition>
    <div class="pop" v-show="isOpen">
      <div class="icon">!</div>
      <div class="word"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: '滨海湾金沙，新加坡',
          isAppend: false,
        },
        {
          text: '布朗酒店，伦敦',
          isAppend: false,
        },
        {
          text: '亚特兰蒂斯巴哈马，拿骚',
          isAppend: false,
        },
        {
          text: '比利福山庄酒店，洛杉矶',
          isAppend: false,
        },
      ],
      lists: [
        'marina bay sands',
        "brown's hotel, london",
        'atlantis nahamas, nassau',
        'the beverly hills hotel, los angeles',
      ],
      isShow: false,
      isHover: false,
      isAdd: false,
      isOpen: false,
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
    append(item) {
      this.items.forEach((list) => {
        if (item === list) {
          item.isAppend = true;
        } else {
          list.isAppend = false;
        }
      });
    },
    remove(item) {
      item.isAppend = false;
    },
    show(index) {
      let word = document.getElementsByClassName('word')[0];
      this.lists.forEach((list, num) => {
        if (index === num) {
          word.innerHTML = list;
        }
      });
      this.isOpen = true;
      setTimeout(() => {
        this.isOpen = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.pop {
  height: 50px;
  border-radius: 5px;
  background: #dadada;
  position: fixed;
  left: 50%;
  top: 10px;
  transform: translate(-50%, 0);
  padding: 15px 30px;
  box-sizing: border-box;
  display: flex;
  .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: blue;
    color: white;
    text-align: center;
    line-height: 20px;
    margin-right: 20px;
  }
  .text {
    flex: 1;
  }
}
.box {
  width: 300px;
  border-radius: 5px;
  border: 1px solid #dadada;
  padding: 20px;
  margin: 20px;
  .test {
    width: 120px;
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
  .background {
    background: #dadada;
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
