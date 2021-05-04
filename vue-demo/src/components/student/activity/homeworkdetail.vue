<template>
  <div align="center">
    <span>{{this.$route.query.userId}}</span>
    <h4>作业详情</h4>
    <el-table :data="tableData" style="width: 100%;" border>
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :width="item.width"

      ></el-table-column>
    </el-table>

    <div>
      <editor></editor>
      <el-button @click="submit">提交</el-button>
      <el-button @click="cancel">取消</el-button>
<!--      <router-link to="/student/activity/submittedhomeworkdetail" tag="button" >提交</router-link>
      <router-link to="/student/activity/homeworklist" tag="button" >取消</router-link>-->
    </div>

  </div>

</template>

<script>

import editor from "./editor";
export default {
  name: "homeworkdetail",
  data() {
    return {
      showOper:true,
      tableCol: [
        {prop: "key", label: "键", width: 500,},
        {prop: "value", label: "值", width: 500},

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
    editor
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

</style>
