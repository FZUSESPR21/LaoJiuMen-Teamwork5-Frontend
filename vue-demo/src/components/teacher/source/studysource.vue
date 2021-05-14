<template>
  <div id="divMain">
    <div id="divSelect">
      <span>班级：</span>
      <el-select size="mini"
                 v-model="value"
                 placeholder="请选择班级"
                 @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.clazzName"
          :value="item.id">
        </el-option>
      </el-select>
    </div>

    <div>
      <el-table id="table"
                :data="tableData"
                stripe
                width="100%"
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

        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="downloadClick(scope.$index)" class="button" icon="el-icon-download">下载</el-button>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="deleteClick(scope.$index,scope.row)" class="button" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div id="divAdd">
      <el-button type="primary" plain size="mini" @click="addClick" class="addbutton">新增</el-button>
    </div>

  </div>
</template>

<script>

export default {
  name: "studysource",
  data() {
    return {
      options: [],
      value: '',

      tableCol: [
        {prop: "resourceName", label: "名称", width: 250},
        {prop: "downloads", label: "下载量", width: 250},

      ],

      tableData: [

      ],

      id: ''
    }
  },

  methods: {
    selectChange() {
      this.queryView()
    },

    downloadClick(index) {
      this.id = this.tableData[index].id
      this.queryDownload()

    },

    deleteClick(index,row) {
      this.id=row.id
      this.queryDelete()
      /*this.$router.push('/teacher/source/study')
      this.$router.go(0)*/
    },

    addClick() {
      this.$router.push({
        path: '/teacher/source/add',
        query: {
        }
      })
    },

    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
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
        url: 'http://1.15.149.222:8080/coursewebsite/teacher/resource/all?clazzId=' + this.value ,
      }).then((response) => {

        console.log(response.data.data.list)
        this.tableData = response.data.data.list
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },

    queryDelete() {
      let info = {
        id: this.id
      }

      this.$axios({
        method: 'post',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://1.15.149.222:8080/coursewebsite/teacher/resource/delete',
      }).then((response) => {          //这里使用了ES6的语法
        /*console.log(JSON.stringify(response))       //请求成功返回的数据
        alert(JSON.stringify(response))
        alert("成功")
        console.log(response.data.data.list)
        this.tableData = response.data.data.list*/
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    },

    queryDownload() {
      window.location.href = 'http://1.15.149.222:8080/coursewebsite/resource/download?id='+this.id;

    },
  },
  created () {
    this.options = JSON.parse(localStorage.getItem('clazzInfo'))
    this.value = this.options[0].id
    this.queryView();
  }

}


</script>

<style scoped>
#divMain {
  background-color: white;
}

#divSelect {
  float: right;
}

.button {
  background-color: white;
  color: #4ab2ee;
}

.addbutton {
  color: white;
  background-color: #4ab2ee;
}

#divAdd{
  float: right;
}
</style>
