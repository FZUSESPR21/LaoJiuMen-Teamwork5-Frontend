<template>
  <div>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="班级">
    <el-select v-model="formInline.region" placeholder="请选择年份班级">
      <el-option label="2021年S班" value="year"></el-option>
      <el-option label="2020年S班" value="yearr"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item class="resultbutton">
  </el-form-item>
</el-form>
<el-table
    :data="tableData"
    stripe
    style="width: 100%"
    >
    <el-table-column
      prop="name"
      label="通知名称"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="发布时间"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="发布人"
      align="center">

    </el-table-column>
    <el-table-column
      prop="content"
      label="发布内容"
      align="center">
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text"
        @click="checkDetail(scope.row.phone)">
        查看
        </el-button>

      </template>
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text"
        @click="updateDetail(scope.row.phone)">
        修改
        </el-button>

      </template>
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text"
        @click="deleteDetail(scope.row.phone)">
        删除
        </el-button>

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
          tableData: [{
            num: '2218',
            name: '王小虎',
            clazzz: '10',
            test:'8',
            homework:'7',
            final:'80(56)',
            add:'81'
          }, {
            num: '2218',
            name: '王小虎',
            clazzz: '10',
            test:'8',
            homework:'7',
            final:'80(56)',
            add:'81'
          }, {
            num: '2218',
            name: '王小虎',
            clazzz: '10',
            test:'8',
            homework:'7',
            final:'80(56)',
            add:'81'
          }, {
            num: '2218',
            name: '王小虎',
            clazzz: '10',
            test:'8',
            homework:'7',
            final:'80(56)',
            add:'81'
          }]
        }

      },
      methods: {
        
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
