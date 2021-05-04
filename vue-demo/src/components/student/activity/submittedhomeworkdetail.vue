<template>
  <div id="div1">
    <span id="span1">提交情况</span>
    <br>
    <el-button id="button" @click="downloadClick">下载</el-button>
    <el-input id="input1" v-model="input1" rows="9" type="textarea" placeholder="回答的内容" resize="none" readonly></el-input>

    <div>
      <span id="span2">教师评语</span>
      <el-input id="input2" v-model="input2" rows="2" type="textarea" placeholder="评论内容" resize="none" readonly></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "submittedhomeworkdetail",
  data() {
    return {
      input1: '',
      input2: ''
    }
  },
  methods: {
    downloadClick() {

    }
  }
}
</script>

<style scoped>
#div1 {
  background-color: white;
}

#button {
  color: white;
  background-color: dodgerblue;
}

#span1 {
  font-weight: bold;
}

#span2 {
  font-weight: lighter;
  font-size: 15px;
}
</style>
