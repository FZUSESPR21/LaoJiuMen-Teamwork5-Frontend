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
  name: "submittedhomeworklist",
  data() {
    return {
      showOper:true,

      tableCol: [
        {prop: "name", label: "作业名称", width: 180},
        {prop: "score", label: "得分", width: 200},

      ],

      tableData: [
        {name: "作业9", score: "99"},
        {name: "作业8", score: "88"},
        {name: "作业7", score: "77"},
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style scoped>

</style>
