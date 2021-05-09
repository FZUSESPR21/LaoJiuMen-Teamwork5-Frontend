<template>
  <div>

    <div id="divSelect">
      <el-select size="mini" v-model="value" placeholder="请选择班级">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

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

      <el-table-column label="操作" v-if="showOper" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick(scope.row)" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="delClick(scope.row)" @click.native.prevent="deleteRow(scope.$index, tableData)" class="button" icon="el-icon-delete">删除</el-button>
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
        options: [{
          value: '班级1',
          label: '2021级S班'
        }, {
          value: '班级2',
          label: '2020级S班'
        }, {
          value: '班级3',
          label: '2019级S班'
        }],
        value: '',

        showOper:true,
        tableCol: [
          {prop: "name", label: "作业名称", width: 100},
          {prop: "startDate", label: "开始时间", width: 200},
          {prop: "endDate", label: "结束时间", width: 200},
          {prop: "state", label: "状态", width: 100},

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

        name: '',
        endDate: ''
      };
    },
    methods: {
      lookClick(e) {
        this.name = e.name
        this.endDate = e.endDate
        this.$router.push({
          path: '/teacher/activity/homeworkdetail',
          query: {
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

      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
  };
</script>

<style scoped>
#divSelect {
  float: right;
}

#table {
  font-weight: normal;
}

.button {
  background-color: white;
  color: dodgerblue;
}

</style>
