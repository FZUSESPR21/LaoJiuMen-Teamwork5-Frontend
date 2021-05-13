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

      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick(scope.$index,scope.row)" class="button" icon="el-icon-view">查看</el-button>
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

      tableCol: [
        {prop: "title", label: "作业名称", width: 400},
        {prop: "score", label: "得分", width: 300},

      ],

      tableData: [

      ],

      sId: 1

    };
  },
  methods: {
    lookClick(index,row) {
      console.log(this.tableData[index].content)
      this.$router.push({
        path: '/student/activity/submittedhomeworkdetail',
        query: {
          content: this.tableData[index].content,
          remark: this.tableData[index].remark

        }
      })
    },

    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
    },

    querySearch() {
      let info = {

      }

      this.$axios({
        method: 'get',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
          url: 'http://localhost:8088/coursewebsite_war_exploded/student/homework_result/all?studentId=' + this.sId ,
      }).then((response) => {          //这里使用了ES6的语法
        /*console.log(JSON.stringify(response))       //请求成功返回的数据
        alert(JSON.stringify(response))
        alert("成功")*/

        console.log(response.data.data.list)
        this.tableData = response.data.data.list
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },
  },
  created() {
    this.querySearch()
  }
}
</script>

<style scoped>
.button {
  background-color: white;
  color: #4ab2ee;
  border: 2px
}
</style>
