<template>
  <div>
    <el-table id="el-table"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="headeRowClass">
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center">
      </el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="150">
        <template slot-scope="scope">
<!--          <router-link to="/student/activity/submittedhomeworkdetail" tag="button" >查看</router-link>-->
          <el-button @click="lookClick" id="lookbutton">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "submittedhomeworklist",
  data() {
    return {
      showOper:true,

      tableCol: [
        {prop: "name", label: "作业名称", width: 400},
        {prop: "score", label: "得分", width: 300},

      ],

      tableData: [
        {name: "作业9", score: "99"},
        {name: "作业8", score: "88"},
        {name: "作业7", score: "77"},
      ],

    };
  },
  methods: {
    lookClick() {
      this.$router.push('/student/activity/submittedhomeworkdetail')
    },

    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC;';
      }
    },
  },
}
</script>

<style scoped>
#lookbutton {
  background-color: white;
  color: dodgerblue;
  border: 2px
}
</style>
