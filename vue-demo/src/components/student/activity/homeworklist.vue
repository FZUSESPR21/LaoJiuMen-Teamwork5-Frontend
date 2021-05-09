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

      <el-table-column label="操作" v-if="showOper" align="center" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="lookClick(scope.row)" class="button" icon="el-icon-view">查看</el-button>
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
        showOper:true,
        tableCol: [
          {prop: "name", label: "作业名称", width: 150},
          {prop: "startDate", label: "开始时间", width: 200},
          {prop: "endDate", label: "结束时间", width: 200},
          {prop: "state", label: "状态", width: 150},
          {prop: "score", label: "得分", width: 100},

        ],

        tableData: [
          {name: "作业9", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "99"},
          {name: "作业8", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "88"},
          {name: "作业7", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "77"},
          {name: "作业6", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "66"},
          {name: "作业5", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "55"},
          {name: "作业4", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "44"},
          {name: "作业3", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "33"},
          {name: "作业2", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "22"},
          {name: "作业1", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "11"},

        ],

        userID: 'LQ',
        name: '',
        endDate: ''
      };
    },
    methods: {
      lookClick(e) {
        this.name = e.name
        this.endDate = e.endDate
        this.$router.push({
          path: '/student/activity/homeworkdetail',
          query: {
            userId: this.userID,
            name: this.name,
            endDate: this.endDate
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

    },
  };
</script>

<style scoped>
#table {
  font-weight: normal;
}

.button {
  background-color: white;
  color: dodgerblue;
}

</style>
