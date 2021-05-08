<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%"
              stripe
              :header-cell-style="headeRowClass">
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
      ></el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="200">
        <template slot-scope="scope">
          <!--          <router-link to="/student/activity/homeworkdetail" tag="button" >下载</router-link>-->
          <el-button type="primary" plain size="mini" @click="lookClick" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="200">
        <template slot-scope="scope">
          <!--          <router-link to="/student/activity/homeworkdetail" tag="button" >下载</router-link>-->
          <el-button type="primary" plain size="mini" @click="downloadClick" class="button" icon="el-icon-download">下载</el-button>
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
        {prop: "name", label: "名称", width: 250},
        {prop: "num", label: "下载量", width: 250},

      ],

      tableData: [
        {name: "教学大纲", num: "99"},
        {name: "教学计划", num: "88"},


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
  },
}
</script>

<style scoped>
.button {
  background-color: white;
  color: dodgerblue;
  border: 2px
}
</style>
