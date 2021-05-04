<template>
  <div id="div1">
    <span id="span1">提交情况</span>
    <br>
    <el-button class="button" id="downloadbutton" @click="downloadClick">下载</el-button>
    <el-input id="input1" v-model="input1" rows="9" type="textarea" placeholder="回答的内容" resize="none" readonly></el-input>

    <div>
      <span id="span2">评论</span>
      <el-input id="input2" v-model="input2" rows="2" type="textarea" placeholder="评论内容" resize="none" readonly></el-input>
    </div>
    <br>

    <div>
      <el-input id="input3" v-model="input3" rows="2" type="textarea" placeholder="请输入评论" resize="none"></el-input>
      <el-button @click="publishClick" class="button" id="publishbutton">发表评论</el-button>
    </div>
    <br>

    <div>
      <span id="span3">评分：</span>
      <el-input id="input4" v-model="input4" rows="1" type="textarea" resize="none"></el-input>
      <el-button @click="submitClick" class="button" id="submitbutton">提交评分</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "submittedhomeworkdetail",
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    downloadClick() {

    },
    publishClick() {

    },
    submitClick() {

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

#span1 {
  font-weight: bold;
}

#span2 {
  font-weight: lighter;
  font-size: 15px;
}

#span3 {
  font-weight: lighter;
  font-size: 15px;
}

</style>
