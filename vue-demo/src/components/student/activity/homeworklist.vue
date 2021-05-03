<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      ></el-table-column>
      <el-table-column label="操作" v-if="showOper">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
          {prop: "name", label: "作业名称", width: 100},
          {prop: "startDate", label: "开始时间", width: 150},
          {prop: "endDate", label: "结束时间", width: 150},
          {prop: "state", label: "状态", width: 100},
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

      };
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
    },
  };
</script>

<style scoped>

</style>
