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
      tableCol: [
        {prop: "account", label: "学号", width: 80},
        {prop: "studentName", label: "姓名", width: 100},
        {prop: "usualScore", label: "平时成绩", width: 150},
        {prop: "writtenScore", label: "笔试成绩", width: 80},
        {prop: "totalScore", label: "最终成绩", width: 200},

      ],
      tableData: []
    }
  },
  methods: {
    onInput() {
      console.log('input!');
    },
    onAnalysis() {
      console.log('analysis!');
    },
    scorelistSearch() {

        this.$axios({
          method: 'get',
          headers: {
            'Content-type': 'application/json;charset=UTF-8'
          },
          url: 'http://1.15.149.222:8080/coursewebsite/teacher/score/all?clazzId=1'
          //+localStorage.getItem('clazzId') ,
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
  },
      created(){
        this.scorelistSearch();
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
  font-size: 20px;
  height: 100px;
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
