<template>
  <div>
    <div>
      <span>提交情况</span>
      <div>
        <el-button @click="download">下载</el-button>
      </div>
      <el-input v-model="input1" rows="3" type="textarea" placeholder="回答的内容" resize="none"></el-input>
    </div>

    <div>
      <span>教师评语</span>
      <el-input v-model="input2" rows="2" type="textarea" placeholder="评论内容" resize="none"></el-input>
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
  }
}
</script>

<style scoped>

</style>
