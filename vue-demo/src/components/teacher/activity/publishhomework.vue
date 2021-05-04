<template>
  <div id="div1">
    <span>发布作业</span>
    <div>
      <span>班级：</span>
      <select>
        <option>2021年S班</option>
        <option>2020年S班</option>
        <option>2019年S班</option>
      </select>
    </div>
    <br>

    <div>
      <span>标题</span>
      <el-input id="input1" v-model="input1" rows="1" type="textarea" placeholder="请输入作业标题" resize="none"></el-input>
      <span>截止时间</span>
      <el-input id="input2" v-model="input2" rows="1" type="textarea" placeholder="请输入截止时间" resize="none"></el-input>
      <span>发布时间</span>
      <el-input id="input3" v-model="input3" rows="1" type="textarea" placeholder="请输入发布时间" resize="none"></el-input>
      <span>评分方式</span>
      <el-input id="input4" v-model="input4" rows="1" type="textarea" placeholder="请输入评分方式" resize="none"></el-input>
      <span>内容</span>
      <el-input id="input5" v-model="input5" rows="4" type="textarea" placeholder="请输入作业内容" resize="none"></el-input>
      <el-button @click="publishClick" class="button" id="publishbutton">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "publishhomework",
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
    }
  }
}
</script>

<style scoped>
#div1 {
  background-color: white;
}

.button {
  color: white;
  background-color: dodgerblue;
}
</style>
