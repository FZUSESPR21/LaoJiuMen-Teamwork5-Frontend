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

<!--      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>-->

      <el-table-column label="操作" align="center" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="downloadClick(scope.$index)" class="button" icon="el-icon-download">下载</el-button>
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

      cId: 1,
      id: ''
    };
  },
  methods: {
    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
    },

    lookClick() {

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
        url: 'http://localhost:8088/coursewebsite_war_exploded/resource/other?clazzId=' + this.cId,
      }).then((response) => {          //这里使用了ES6的语法
        /*console.log(JSON.stringify(response))       //请求成功返回的数据
        alert(JSON.stringify(response))
        alert("成功")
        console.log(response.data.data.list)*/
        this.tableData = response.data.data.list
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },

    querySearch() {
      window.location.href = 'http://localhost:8088/coursewebsite_war_exploded/resource/download?id='+this.id;

    },
  },
  created() {
    this.queryView()
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
