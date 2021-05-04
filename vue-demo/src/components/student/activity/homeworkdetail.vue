<template>
  <div id="div1">
    <sapn id="tag">作业详情</sapn>
    <el-table :data="tableData" style="width: 100%;" border>
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :width="item.width">
      </el-table-column>
    </el-table>

    <div id="div2" align="center">
      <vue-editor id="editor" v-model="content"></vue-editor>
      <br>
      <el-button @click="submit" id="button1">提交</el-button>
      <el-button @click="cancel" id="button2">取消</el-button>
<!--      <router-link to="/student/activity/submittedhomeworkdetail" tag="button" >提交</router-link>
      <router-link to="/student/activity/homeworklist" tag="button" >取消</router-link>-->
    </div>
  </div>
</template>

<script>
// Basic Use - Covers most scenarios
import { VueEditor } from 'vue2-editor'



export default {
  name: "homeworkdetail",
  data() {
    return {
      showOper:true,
      tableCol: [
        {prop: "key", label: "键", width: 200},
        {prop: "value", label: "值", width: 600},

      ],

      tableData: [
        {key: "标题：", value: this.$route.query.name},
        {key: "截止时间：", value: this.$route.query.endDate},
        {key: "评分方式：", value: "打分制：10.0分"},
        {key: "作业内容：", value: ""},

      ],

      content: null,
      editorOption: {}

    };
  },
  components: {//使用编辑器
    VueEditor
  },

  methods: {
    submit() {
      this.$router.push('/student/activity/submittedhomeworkdetail')
    },
    cancel() {
      this.$router.push('/student/activity/homeworklist')
    },

  },

}
</script>

<style scoped>
#tag {
  font-weight:bold;
  color: #000000;
  background-color: white;
}

#div1 {
  background-color: white;
}

#button1 {
  color: white;
  background-color: dodgerblue;
}

#button2 {
  color: dodgerblue;
  background-color: white;
}
</style>
