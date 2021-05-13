<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="班级">
          <el-select v-model="formInline.region" placeholder="请选择年份班级">
            <el-option label="2021年S班" value="year"></el-option>
            <el-option label="2020年S班" value="yearr"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="resultbutton"></el-form-item>
      </el-form>
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

      <el-table-column label="操作" align="center" width="80">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="lookClick(scope.$index,scope.row)" class="button" icon="el-icon-view">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="80">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="updateClick(scope.$index, scope.row)" @click.native.prevent="uopdateRow(scope.$index, scope.row)" class="button" icon="el-icon-delete">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="80">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="deleteClick(scope.$index, scope.row)" @click.native.prevent="deleteRow(scope.$index, scope.row)" class="button" icon="el-icon-delete">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: "noticelist",
  data() {
    return {
      formInline: {
      user: '',
      region: ''
      },
      tableCol: [
        {prop: "id", label: "id", width: 80},
        {prop: "notificationName", label: "通知名称", width: 100},
        {prop: "content", label: "通知内容", width: 150},
        {prop: "issuer", label: "发布人", width: 80},
        {prop: "releasedAt", label: "发布时间", width: 200},

      ],

      tableData: [],

      nId: '1',
      nname: '',
      content: ''
    };
  },
  methods: {
    deleteClick(index,row) {
      this.id = row.id
      this.queryDelete()
    },
    deleteRow(index, row) {
      this.id = row.id
      this.queryDelete()
    },
    lookClick(index,row) {

      this.$router.push({
        path: '/student/activity/noticedetail',
        query: {
          nId: row.id,
          nname: row.notificationName,
          content: this.tableData[index].content
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

    querySearch() {
      let info = {}

      this.$axios({
        method: 'get',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://1.15.149.222:8080/coursewebsite/notice/all?clazzId=1' ,
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
          url: 'http://1.15.149.222:8080/coursewebsite/notice/all?clazzId=1',
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
    
    created () {
      this.querySearch();
    }
  }
}



</script>


<style scoped>
#head{
  background-color: white;
  font-size: 20px;
  height: 100px;
}
.demo-form-inline{
  margin-top:5%;
}
.resultbutton{
  float:right;
}
</style>




<style scoped>
#head{
  background-color: white;
  font-size: 20px;
  height: 100px;
  margin-top: 8%;
}

.english{
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

.part{
  margin-top: -4%;
  background-color: rgb(228, 228, 228);
}
</style>
