<template>
  <div class="item">
    <div class="head">
      <label for="list" class="test">
        <input type="file" @change="fileChange" id="list" />
        <div class="select">选择文件</div>
      </label>
      <div class="btn" @click="submit">上传文件</div>
    </div>
    <ul class="itemList">
      <li class="file" v-for="(file, i) in files" :key="file.name">
        <div class="name">{{ file.name }}</div>
        <div class="star" @click="deleteFile(i)">×</div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
let fileObj;
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    fileChange(e) {
      let file = e.target.files[0];
      fileObj = file;
      this.files.push(fileObj);
    },
    async submit() {
      let fm = new FormData();
      fm.append(fileObj.name, fileObj);
      // fm.append('file', fileObj);
      axios.post('http://192.168.10.102:2233/upload', fm);
    },
    deleteFile(i) {
      this.files.splice(i, 1);
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
  flex-direction: column;
  text-align: center;
  line-height: 40px;
  margin: 20px;
  .head {
    height: 50px;
    display: flex;
  }
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
  .itemList {
    flex: 1;
    .file {
      height: 30px;
      margin: 5px 10px;
      display: flex;
    }
    .star {
      width: 20px;
      margin: 0 5px;
      cursor: pointer;
    }
    .name {
      flex: 1;
      padding: 0 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
