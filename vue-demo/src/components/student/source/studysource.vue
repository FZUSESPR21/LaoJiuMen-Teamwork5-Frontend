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

      <el-table-column label="操作" align="center" width="300">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="downloadClick(scope.$index)" id="downloadbutton" icon="el-icon-download">下载</el-button>
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

      tableCol: [
        {prop: "resourceName", label: "名称", width: 300},
        {prop: "downloads", label: "下载量", width: 300},

      ],

      tableData: [

      ],

      cId: localStorage.clazzId,
      id: ''//资源Id
    };
  },
  methods: {
    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
    },

    downloadClick(index) {
      this.id = this.tableData[index].id
      this.querySearch()
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
        url: 'http://1.15.149.222:8080/coursewebsite/student/resource/all?clazzId=' + this.cId,
      }).then((response) => {

        console.log(response.data.data.list)
        this.tableData = response.data.data.list
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },

    querySearch() {
      window.location.href = 'http://1.15.149.222:8080/coursewebsite/resource/download?id='+this.id;

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
  color: #4ab2ee;
  border: 2px
}
</style>
