<template>
  <div class="box">
    <div class="title">手风琴</div>
    <div class="content">
      <ul class="itemList">
        <li class="item" v-for="item in items" :key="item.massage">
          <div class="main" @click="show(item)">
            <i class="el-icon-arrow-right" v-if="item.isShow"></i>
            <i class="el-icon-arrow-down" v-else></i>
            <div class="text">{{ item.title }}</div>
          </div>
          <div class="type" v-show="item.isShow">{{ item.type }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: '动态类型',
          type: 'Python',
          isShow: true,
        },
        {
          title: '静态类型',
          type: 'Java',
          isShow: false,
        },
      ],
    };
  },
  methods: {
    show(item) {
      this.items.forEach((list) => {
        if (item === list) {
          item.isShow = !item.isShow;
        } else {
          list.isShow = false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
  }
  .content {
    flex: 1;
    .itemList {
      display: flex;
      flex-direction: column;
    }
    .item {
      flex: 1;
      padding: 20px 0;
    }
    .main {
      display: flex;
      align-items: center;
      cursor: pointer;
      .el-icon-arrow-right,
      .el-icon-arrow-down {
        width: 30px;
      }
      .text {
        flex: 1;
      }
    }
    .type {
      padding-top: 20px;
    }
    .item:nth-child(1) {
      border-bottom: 1px solid #dadada;
    }
  }
}
</style>
