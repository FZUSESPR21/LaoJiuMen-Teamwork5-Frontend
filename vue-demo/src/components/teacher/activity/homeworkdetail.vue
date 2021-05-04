<template>
  <div id="div1">
    <div>
      <sapn id="tag">作业详情</sapn>
      <el-table :data="tableData" style="width: 100%;" border>
        <el-table-column
          v-for="(item,i) in tableCol"
          :key="i"
          :prop="item.prop"
          :width="item.width">
        </el-table-column>
      </el-table>
    </div>

    <div>
      <sapn id="tag">提交列表</sapn>
      <el-table id="table"
                :data="tableData2"
                style="width: 100%"
                :header-cell-style="headeRowClass">
        <el-table-column
          v-for="(item,i) in tableCol2"
          :key="i"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          align="center"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column label="作业详情" v-if="showOper" align="center" width="150">
          <template slot-scope="scope">
            <!--          <router-link to="/student/activity/homeworkdetail" tag="button" >查看</router-link>-->
            <el-button @click="lookClick(scope.row)" id="lookbutton">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
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

      tableCol2: [
        {prop: "sno", label: "学号", width: 100},
        {prop: "name", label: "姓名", width: 200},
        {prop: "submitDate", label: "提交时间", width: 200},
        {prop: "submission", label: "提交情况", width: 100},

      ],

      tableData2: [
        {sno: "221801101", name: "姓名1", submitDate: "2020-01-02", submission: "已提交"},
        {sno: "221801102", name: "姓名2", submitDate: "2020-01-02", submission: "已提交"},
        {sno: "221801103", name: "姓名3", submitDate: "--", submission: "未提交"},


      ],

      content: null,
      editorOption: {}

    };
  },
  components: {//使用编辑器
    VueEditor
  },

  methods: {
    lookClick() {
      this.$router.push({
        path: '/teacher/activity/submitdetail',
        query: {
          userId: this.userID,
          name: this.name,
          endDate: this.endDate
        }
      })
    }

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

#lookbutton {
  background-color: white;
  color: dodgerblue;
  border: 2px
}

</style>
