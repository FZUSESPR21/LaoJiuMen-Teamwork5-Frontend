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
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

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

        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button v-if="scope.row.type=='2'" type="text" size="mini" @click="editClick" class="button" icon="el-icon-edit">编辑</el-button>
            <el-button v-else type="text" size="mini" @click="downloadClick(scope.row)" class="button" icon="el-icon-download">下载</el-button>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="deleteClick(scope.$index, scope.row)" class="button" icon="el-icon-delete">删除</el-button>
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
  name: "othersource",
  data() {
    return {
      options: [{
        value: 1,
        label: '2021级S班'
      }, {
        value: 2,
        label: '2020级S班'
      }, {
        value: 3,
        label: '2019级S班'
      }],
      value: 1,


      tableCol: [
        {prop: "resourceName", label: "名称", width: 250},
        {prop: "downloads", label: "下载量", width: 250},

      ],

      tableData: [


      ],
      rsId: '',
      filePath: 1



    }
  },

  methods: {
    selectChange() {
      this.queryView()
    },

    downloadClick(row) {
      this.filePath = row.filePath
      console.log(this.filePath)

    },

    editClick() {
      this.$router.push({
        path: '/teacher/source/teachingplan',
        query: {

        }
      })
    },

    deleteClick(index,row) {
      this.rsId = row.id
      this.queryDelete()
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
        url: 'http://localhost:8088/coursewebsite_war_exploded/resource/other?clazzId=' + this.value ,
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

    queryDelete() {
      let info = {
        id: this.rsId
      }

      this.$axios({
        method: 'post',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://localhost:8088/coursewebsite_war_exploded/teacher/resource/delete',
      }).then((response) => {          //这里使用了ES6的语法
        /*console.log(JSON.stringify(response))       //请求成功返回的数据
        alert(JSON.stringify(response))
        alert("成功")
        console.log(response.data.data.list)
        this.tableData = response.data.data.list*/
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    }
  },

  created () {
    this.queryView();
  }

}
</script>

<style scoped>
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
  clear: left;
}
</style>
