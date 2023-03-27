<template>
  <div id="app">
    <collapse-page></collapse-page>
    <layer-page></layer-page>
    <floor-page></floor-page>
    <drop-down></drop-down>
  </div>
</template>
<script>
import CollapsePage from './components/CollapsePage.vue';
import LayerPage from './components/LayerPage.vue';
import FloorPage from './components/FloorPage.vue';
import DropDown from './components/DropDown.vue';
export default {
  components: {
    CollapsePage,
    LayerPage,
    FloorPage,
    DropDown,
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
      items: [1, 2, 3],
      isShow: false,
    };
  },
  mounted() {
    // console.log(this.$el.textContent);
    this.item = this.$refs.item.obj;
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
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
