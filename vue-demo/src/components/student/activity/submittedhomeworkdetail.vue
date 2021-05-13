<template>
  <div id="div1">
    <div>
      <span id="span1">提交情况</span>
    </div>

    <br>

    <div>
      <i class="el-icon-folder-opened"></i>
      <el-button type="primary" plain size="mini" id="button" @click="downloadClick">下载</el-button>
    </div>

    <br>

    <div>
      <el-input id="input1" v-model="input1" rows="9" type="textarea" placeholder="回答的内容" resize="none" readonly></el-input>
    </div>

    <br>

    <div>
      <span id="span2">教师评语</span>
      <el-input id="input2" v-model="input2" rows="5" type="textarea" placeholder="评论内容" resize="none" readonly></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "submittedhomeworkdetail",
  data() {
    return {
      input1: this.$route.query.content,
      input2: this.$route.query.remark,

      id: this.$route.query.id
    }
  },
  methods: {
    downloadClick() {
      this.querySearch()
      console.log(this.id)

    },
    querySearch() {
      window.location.href = 'http://localhost:8088/coursewebsite_war_exploded/homework_result/download?id='+this.id;

    },

  },

}
</script>

<style scoped>
#div1 {
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #b3b1b1;
}

#button {
  color: white;
  background-color: #4ab2ee;
}

#span1 {
  font-weight: bold;
}

#span2 {
  font-weight: lighter;
  font-size: 15px;
}
</style>
