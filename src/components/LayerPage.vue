<template>
  <div class="box">
    <div class="head">嵌套</div>
    <div class="content">
      <ul class="itemList">
        <li class="item" v-for="item in items" :key="item.massage">
          <div>
            <div class="main" @click="show(item)">
              <i class="el-icon-arrow-right" v-if="!item.isShow"></i>
              <i class="el-icon-arrow-down" v-else></i>
              <div class="title">{{ item.title }}</div>
            </div>
            <ul class="listItem" v-show="item.isShow">
              <li class="item" v-for="list in item.states" :key="list.massage">
                <div class="main" @click="open(list)">
                  <i class="el-icon-arrow-right" v-if="!list.isShow"></i>
                  <i class="el-icon-arrow-down" v-else></i>
                  <div class="satte">{{ list.state }}</div>
                </div>
                <div class="pointer" v-show="list.isShow">
                  {{ list.pointer }}
                </div>
              </li>
            </ul>
          </div>
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
          title: '绿灯',
          states: [
            {
              state: '常亮',
              pointer: '通过',
              isShow: false,
            },
            {
              state: '闪烁',
              pointer: '快速通过',
              isShow: false,
            },
          ],
          isShow: false,
        },
        {
          title: '红灯',
          states: [
            {
              state: '常亮',
              pointer: '停',
              isShow: false,
            },
            {
              state: '闪烁',
              pointer: '注意',
              isShow: false,
            },
          ],
          isShow: false,
        },
      ],
    };
  },
  methods: {
    show(item) {
      item.isShow = !item.isShow;
    },
    open(list) {
      list.isShow = !list.isShow;
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 300px;
  border: 1px solid #dadada;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .head {
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
      margin: 10px 0;
    }
    .item:nth-child(1) {
      border-bottom: 1px solid #dadada;
    }
    .main {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      cursor: pointer;
      .title,
      .state {
        flex: 1;
      }
    }
    .el-icon-arrow-right,
    .el-icon-arrow-down {
      width: 30px;
    }
  }
  .listItem {
    margin-left: 30px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }
  .pointer {
    margin-bottom: 20px;
  }
}
</style>
