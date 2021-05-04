<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" v-if="showOper" align="center" width="150">
        <template slot-scope="scope">
<!--          <router-link to="/student/activity/homeworkdetail" tag="button" >查看</router-link>-->
          <el-button @click="lookClick(scope.row)">查看</el-button>
        </template>

      </el-table-column>

    </el-table>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "homeworklist",
    data() {
      return {
        showOper:true,
        tableCol: [
          {prop: "name", label: "作业名称", width: 100},
          {prop: "startDate", label: "开始时间", width: 200},
          {prop: "endDate", label: "结束时间", width: 200},
          {prop: "state", label: "状态", width: 100},
          {prop: "score", label: "得分", width: 100},

        ],

        tableData: [
          {name: "作业9", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "99"},
          {name: "作业8", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "88"},
          {name: "作业7", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "77"},
          {name: "作业6", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "66"},
          {name: "作业5", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "55"},
          {name: "作业4", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "44"},
          {name: "作业3", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "33"},
          {name: "作业2", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "22"},
          {name: "作业1", startDate: "2020-01-01", endDate: "2020-01-02", state: "已结束", score: "11"},

        ],

        userID: 'LQ',
        name: '',
        endDate: ''
      };
    },
    methods: {
      lookClick(e) {
        /*alert(JSON.stringify(e))*/
        // alert(e.endDate)
        this.name = e.name
        this.endDate = e.endDate
        /*this.$confirm('此操作将永久删除该用户信息，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancleButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('delete', {id: e.id})
            .then(alert('删除成功'),
              location.reload()
            )
        })*/
        // this.$router.push({name: '/', params: {参数名: '参数值'})
        this.$router.push({
          path: '/student/activity/homeworkdetail',
          query: {
            userId: this.userID,
            name: this.name,
            endDate: this.endDate
          }
        })
        // this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
      }

    },

  };

  /*axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    console.log(res)
  })

  axios.all([axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }), axios({
    url: '',
    params: ''
  })]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  }))*/
</script>

<style scoped>

</style>
