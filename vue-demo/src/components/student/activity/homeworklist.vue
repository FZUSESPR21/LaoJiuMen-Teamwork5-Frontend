<template>
  <div>
    <el-table id="table"
              :data="tableData"
              stripe
              style="width: 100%"
              :header-cell-style="headeRowClass">
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
        show-overflow-tooltip>
      </el-table-column>

      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick(scope.$index,scope.row)" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "homeworklist",
    data() {
      return {
        tableCol: [
          {prop: "title", label: "作业名称", width: 150},
          {prop: "startAt", label: "开始时间", width: 200},
          {prop: "endAt", label: "结束时间", width: 200},
          {prop: "state", label: "状态", width: 150},
          {prop: "score", label: "得分", width: 100},

        ],

        tableData: [

        ],

        cId: 3,
        hwId: '',
        sId: 4,
        name: '',
        endDate: '',
        content: ''
      };
    },
    methods: {
      lookClick(index,row) {

        this.$router.push({
          path: '/student/activity/homeworkdetail',
          query: {
            hwId: row.id,
            stuId: this.sId,
            name: row.title,
            endDate: row.endAt,
            content: this.tableData[index].content
          }
        })
        // this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
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
          url: 'http://localhost:8088/coursewebsite_war_exploded/student/homework/all?clazzId=' + this.cId,
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

    created () {
      this.querySearch();
    }
  };
</script>

<style scoped>
#table {
  font-weight: normal;
}

.button {
  background-color: white;
  color: #4ab2ee;
}

</style>
