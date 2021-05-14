<template>
  <div>

    <div id="divSelect">
      <el-select size="mini"
                 v-model="value"
                 placeholder="请选择班级"
                 @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.clazzName"
          :value="item.id"
        >
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


      <el-table-column label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick(scope.$index,scope.row)" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="deleteClick(scope.$index, scope.row)" class="button" icon="el-icon-delete">删除</el-button>
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
        options: [],
        value: '',

        tableCol: [
          {prop: "title", label: "作业名称", width: 100},
          {prop: "startAt", label: "开始时间", width: 200},
          {prop: "endAt", label: "结束时间", width: 200},
          {prop: "status", label: "状态", width: 100},

        ],

        tableData: [

        ],

        tId: localStorage.id
      };
    },
    methods: {
      selectChange() {
        this.querySearch()
      },

      lookClick(index,row) {
        this.$router.push({
          path: '/teacher/activity/homeworkdetail',
          query: {
            hwId: row.id,
            name: row.title,
            endDate: row.endAt,
            content: this.tableData[index].content
          }
        })
      },

      deleteClick(index,row) {
        this.id = row.id
        this.queryDelete()
        /*this.$router.push('/teacher/activity/homeworklist')
        this.$router.go(0)*/
      },

      headeRowClass({row, column, rowIndex, columnIndex}){
        //表头的背景颜色
        if(rowIndex==0){
          return 'background:#DCDCDC; color: black';
        }
      },


      querySearch() {
        let info = {

        }

        this.$axios({
          method: 'get',
          headers: {
            'Content-type': 'application/json;charset=UTF-8'
          },
          data: JSON.stringify(info),
          url: 'http://1.15.149.222:8080/coursewebsite/teacher/homework/all?clazzId=' + this.value ,
        }).then((response) => {          //这里使用了ES6的语法
          /*console.log(JSON.stringify(response))       //请求成功返回的数据
          alert(JSON.stringify(response))
          alert("成功")*/

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
          url: 'http://1.15.149.222:8080/coursewebsite/teacher/homework/delete',
        }).then((response) => {          //这里使用了ES6的语法

          alert('删除成功')
        }).catch((error) => {
          console.log(error)       //请求失败返回的数据
        })
      }
    },

    created () {
      this.options = JSON.parse(localStorage.getItem('clazzInfo'))
      this.value = this.options[0].id
      this.querySearch();
    }
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
  color: #4ab2ee;
}

</style>
