<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
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
          <el-button @click="downloadClick">下载</el-button>
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
        {prop: "name", label: "名称", width: 100},
        {prop: "num", label: "下载量", width: 150},

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

  },
}
</script>

<style scoped>

</style>
