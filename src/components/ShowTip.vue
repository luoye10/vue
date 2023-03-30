<template>
  <div class="mask" v-show="show" @click="close">
    <div class="dialog">
      <div class="head" v-if="!$slots.head">
        标题
        <i class="el-icon-close"></i>
      </div>
      <slot name="head" v-else></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowTip',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  .dialog {
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
