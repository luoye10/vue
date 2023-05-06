<template>
  <div class="item">
    <label for="list" class="test">
      <input type="file" @change="fileChange" id="list" />
      <div class="select">选择文件</div>
    </label>
    <div class="btn" @click="submit">上传文件</div>
  </div>
</template>
<script>
import axios from 'axios';
let fileObj;
export default {
  data() {
    return {};
  },
  methods: {
    fileChange(e) {
      let file = e.target.files[0];
      fileObj = file;
      console.log(file);
      // if (!/zip/i.test(flie.type)) {
      //   alert('文件格式不正确');
      // }
      // if (file.size > 10 * 24 * 24) {
      //   alert('文件不能大于10M');
      // }
    },
    async submit() {
      let fm = new FormData();
      fm.append(fileObj.name, fileObj);
      // fm.append('file', fileObj);
      axios.post('http://192.168.10.102:2233/upload', fm);
    },
  },
};
</script>
<style lang="less" scoped>
.item {
  width: 300px;
  height: 300px;
  border: 1px solid #dadada;
  display: flex;
  text-align: center;
  line-height: 40px;
  margin: 20px;
  .test {
    margin: 10px;
    #list {
      width: 0;
      height: 0;
    }
    .select {
      width: 100px;
      height: 40px;
      background: #409eff;
      color: white;
      border-radius: 5px;
      margin-top: -40px;
      cursor: pointer;
    }
  }
  .btn {
    width: 100px;
    height: 40px;
    background: #67c23a;
    color: white;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
  }
}
</style>
