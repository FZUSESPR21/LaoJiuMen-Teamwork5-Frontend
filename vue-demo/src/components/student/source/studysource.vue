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

      <el-table-column label="操作" v-if="showOper" align="center" width="300">
        <template slot-scope="scope">
<!--          <router-link to="/student/activity/homeworkdetail" tag="button" >下载</router-link>-->
          <el-button type="text" size="mini" @click="downloadClick" id="downloadbutton" icon="el-icon-download">下载</el-button>
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
        {prop: "resourceName", label: "名称", width: 300},
        {prop: "downloads", label: "下载量", width: 300},

      ],

      tableData: [

      ],

    };
  },
  methods: {
    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
    },

    downloadClick() {

    },

    queryView() {
      let info = {

      }

      this.$axios({
        method: 'get',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://localhost:8088/coursewebsite_war_exploded/student/resource/all?clazzId=1',
      }).then((response) => {

        console.log(response.data.data.list)
        this.tableData = response.data.data.list
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },
  },
  created () {
    this.queryView();
  }
}
</script>

<style scoped>
#downloadbutton {
  background-color: white;
  color: dodgerblue;
  border: 2px
}
</style>
