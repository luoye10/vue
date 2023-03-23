<template>
  <div id="app">
    <div>{{ massage }}</div>
    <button @click="change">点击修改</button>
    <div>{{ obj }}</div>
    <button @click="propertyChange">修改</button>
    <main-page name="jack" ref="item">
      <template #default="obj">{{ obj.text + obj.abc }}</template>
    </main-page>
    <home-page name="lucy" age="20" @add="handle">
      <div slot="head">头部</div>
      <div class="bottom" slot="bottom">
        <div>底部内容</div>
      </div>
      <div>没有插槽</div>
    </home-page>
    <div>{{ text }}</div>
    <div>{{ item }}</div>
    <collapse-page></collapse-page>
  </div>
</template>
<script>
import MainPage from './components/MainPage.vue';
import HomePage from './components/HomePage.vue';
import CollapsePage from './components/CollapsePage.vue';
export default {
  components: {
    MainPage,
    HomePage,
    CollapsePage,
  },
  provide() {
    return {
      color: 'red',
    };
  },
  data() {
    return {
      massage: '初始内容',
      obj: {
        name: 'tom',
        age: 30,
        gender: '男',
        list: {
          name: 'lily',
          age: 25,
          work: '老师',
        },
      },
      text: '',
      item: {},
    };
  },
  mounted() {
    // console.log(this.$el.textContent);
    this.item = this.$refs.item.obj;
  },
  methods: {
    change() {
      this.massage = '修改后的值';
      console.log(this.$el.textContent);
      this.$nextTick(() => {
        console.log(this.$el.textContent);
      });
    },
    propertyChange() {
      this.obj = Object.assign({}, this.obj, { work: '销售' });
      console.log(this.obj);
    },
    handle(msg) {
      this.text = msg;
    },
  },
};
</script>
