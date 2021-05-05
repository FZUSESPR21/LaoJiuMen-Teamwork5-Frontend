<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%"
              :header-cell-style="headeRowClass">
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
      ></el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="150">
        <template slot-scope="scope">
<!--          <router-link to="/student/activity/homeworkdetail" tag="button" >下载</router-link>-->
          <el-button @click="downloadClick" id="downloadbutton">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "studysource",
  data() {
    return {
      showOper:true,
      tableCol: [
        {prop: "name", label: "名称", width: 300},
        {prop: "num", label: "下载量", width: 300},

      ],

      tableData: [
        {name: "资源1", num: "99"},
        {name: "资源2", num: "88"},
        {name: "资源3", num: "77"},
        {name: "资源4", num: "66"},

      ],

    };
  },
  methods: {
    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; ';
      }
    },

    downloadClick() {

    }
  },
}
</script>

<style scoped>
#downloadbutton {
  background-color: white;
  color: dodgerblue;
  border: 2px
}
</style>
