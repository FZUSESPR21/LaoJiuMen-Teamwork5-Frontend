<template>
  <div id="div1">
    <div>
      <i class="el-icon-document"></i>
      <sapn id="tag">作业详情</sapn>
      <el-table :data="tableData"
                style="width: 100%;"
                :row-style="{height:'100px'}"
                :show-header="status"
                border>
        <el-table-column
          v-for="(item,i) in tableCol"
          :key="i"
          :prop="item.prop"
          :width="item.width">
        </el-table-column>
      </el-table>
    </div>

    <br>

    <div>
      <i class="el-icon-finished"></i>
      <sapn id="tag">提交列表</sapn>
      <el-table id="table"
                :data="tableData2"
                stripe
                style="width: 100%"
                :header-cell-style="headeRowClass">
        <el-table-column
          v-for="(item,i) in tableCol2"
          :key="i"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          align="center">
        </el-table-column>

        <el-table-column label="作业详情" v-if="showOper" align="center" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="lookClick(scope.row)" class="button" icon="el-icon-view">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: "homeworkdetail",
  data() {
    return {
      status: false,
      showOper:true,
      tableCol: [
        {prop: "key", label: "键", width: 249},
        {prop: "value", label: "值", width: 650},

      ],

      tableData: [
        {key: "标题：", value: this.$route.query.name},
        {key: "截止时间：", value: this.$route.query.endDate},
        {key: "作业内容：", value: this.$route.query.content},

      ],

      tableCol2: [
        {prop: "account", label: "学号", width: 200},
        {prop: "studentName", label: "姓名", width: 150},
        {prop: "submittedAt", label: "提交时间", width: 250},
        {prop: "score", label: "提交情况", width: 150},

      ],

      tableData2: [

      ],

      dataTemp:[],

      hwId: this.$route.query.id,

    };
  },

  methods: {
    lookClick() {
      this.$router.push({
        path: '/teacher/activity/submittedhomeworkdetail',
        query: {
          userId: this.userID,
          name: this.name,
          endDate: this.endDate
        }
      })
    },

    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; color: black';
      }
    },


    queryHrInfo() {
      let info = {

      }

      this.$axios({
        method: 'get',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://localhost:8088/coursewebsite_war_exploded/teacher/homework_result/all_sub?id=6',
      }).then((response) => {          //这里使用了ES6的语法
        // console.log(JSON.stringify(response))       //请求成功返回的数据

        this.tableData2 = response.data.data.list
        console.log(this.tableData2)
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    }


  },

  created() {
    this.queryHrInfo()
  }

}
</script>

<style scoped>
#tag {
  font-weight:bold;
  color: #000000;
  background-color: white;
}

#div1 {
  background-color: white;
}

.button {
  background-color: white;
  color: #4ab2ee;
  border: 2px
}

</style>
