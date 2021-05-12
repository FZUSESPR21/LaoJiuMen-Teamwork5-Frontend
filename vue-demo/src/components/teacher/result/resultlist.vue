<template>
  <div>
  <el-form :inline="true" :model="formInline" class="score-rule">
    <el-form-item label="班级">
    <el-select v-model="formInline.region" placeholder="请选择年份班级">
      <el-option label="2021年S班" value="year"></el-option>
      <el-option label="2020年S班" value="yearr"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item class="resultbutton">
      <el-button type="primary" @click="onInput">成绩录入</el-button>
      <el-button type="primary" @click="onAnalysis">成绩分析</el-button>
      <el-button class="filter-item" type="primary" @click="$router.push('/resultlist/resultinput')">成绩录入new</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%"
  >
    <el-table-column
      prop="num"
      label="学号"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="clazzz"
      label="考勤课堂10%"
      align="center">

    </el-table-column>
    <el-table-column
      prop="test"
      label="小测10%"
      align="center">
    </el-table-column>
    <el-table-column
      prop="homework"
      label="作业10%"
      align="center">
    </el-table-column>
    <el-table-column
      prop="final"
      label="期末笔试70%"
      align="center">
    </el-table-column>
    <el-table-column
      prop="add"
      label="综合成绩"
      align="center">
    </el-table-column>
  </el-table>
  </div>
</template>




<script>
export default {
  name: "resultlist",
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
    onInput() {
      console.log('input!');
    },
    onAnalysis() {
      console.log('analysis!');
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
.score-rule{
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
  margin-left: 20%;
  background-color: rgb(228, 228, 228);
}
</style>
