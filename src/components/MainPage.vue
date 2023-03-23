<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ flag }}</div>
    <div>
      <slot text="msg" abc="20">这是一个插槽</slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name'],
  data() {
    return {
      obj: {
        name: 'john',
        age: 22,
      },
      flag: false,
    };
  },
  mounted() {
    this.hand();
  },
  methods: {
    hand() {
      this.$bus.$on('change', (msg) => {
        this.flag = msg;
      });
    },
  },
};
</script>
