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

      <el-table-column label="操作" v-if="showOper" align="center" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick" class="button" icon="el-icon-view">查看</el-button>
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
        return 'background:#DCDCDC; color: black';
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
