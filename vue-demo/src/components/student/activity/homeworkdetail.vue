<template>
  <div id="div1">
    <sapn id="tag">作业详情</sapn>
    <el-table :data="tableData"
              style="width: 100%;"
              :row-style="{height:'100px'}"
              :show-header="status"
              border>
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
      <el-button type="primary" plain size="mini" @click="submit" id="button1">提交</el-button>
      <el-button type="primary" plain size="mini" @click="cancel" id="button2">取消</el-button>
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
      status: false,
      showOper:true,
      tableCol: [
        {prop: "key", label: "键", width: 249},
        {prop: "value", label: "值", width: 650},

      ],

      tableData: [
        {key: "标题：", value: this.$route.query.name},
        {key: "截止时间：", value: this.$route.query.endDate},
        {key: "作业内容：", value: this.$route.query.content},

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
  background-color: #4ab2ee;
}

#button2 {
  color: #4ab2ee;
  background-color: white;
}
</style>
