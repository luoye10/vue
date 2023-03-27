<template>
  <div class="container">
    <div class="title">基础</div>
    <div class="content">
      <ul class="itemList">
        <li class="item" v-for="(item, index) in items" :key="item.massage">
          <div class="main" @click="show(item, index)">
            <i class="el-icon-arrow-right" v-if="!item.isShow"></i>
            <i class="el-icon-arrow-down" v-else></i>
            <div class="rank">{{ item.rank }}</div>
          </div>
          <div class="remark" v-show="item.isShow">{{ item.remark }}</div>
        </li>
      </ul>
    </div>
    <div class="pop" v-show="isShow">
      <div class="icon">!</div>
      <div class="text"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          rank: '青铜',
          remark: '可以',
          isShow: false,
        },
        {
          rank: '白银',
          remark: '很好',
          isShow: false,
        },
        {
          rank: '黄金',
          remark: '真棒',
          isShow: false,
        },
      ],
      isShow: false,
    };
  },
  methods: {
    show(item, index) {
      item.isShow = !item.isShow;
      this.titleShow(item, index);
    },
    titleShow(el, sub) {
      let text = document.getElementsByClassName('text')[0];
      text.innerHTML = 'Name: ' + (sub + 1) + ',' + 'Expanded: ' + el.isShow;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
    },
  },
};
</script>
<style lang="less" scoped>
.pop {
  width: 300px;
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
.container {
  width: 300px;
  border: 1px solid #dadada;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
  }
  .content {
    flex: 1;
  }
  .itemList {
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .main {
        display: flex;
        align-items: center;
        cursor: pointer;
        .el-icon-arrow-right,
        .el-icon-arrow-down {
          width: 30px;
        }
        .rank {
          flex: 1;
        }
      }
      .remark {
        padding-top: 20px;
      }
    }
  }
  .item:nth-child(2) {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
  }
}
</style>
