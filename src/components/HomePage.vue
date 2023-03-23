<template>
  <div>
    <div>{{ name + ',' + age }}</div>
    <div>{{ color }}</div>
    <div>
      <slot name="head"></slot>
      <slot name="bottom"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'age'],
  inject: ['color'],
  mounted() {
    this.hand();
  },
  methods: {
    hand() {
      this.$emit('add', 'hello');
      this.$bus.$emit('change', true);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
