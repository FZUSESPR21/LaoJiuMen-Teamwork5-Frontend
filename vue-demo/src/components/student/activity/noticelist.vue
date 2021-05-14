<template>
  <div>
    <el-table id="table"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClass"
              :header-cell-style="headeRowClass"
              :row-style="tableRowStyle">
      <el-table-column
        v-for="(item,i) in tableCol"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
        show-overflow-tooltip>
      </el-table-column>

      <el-table-column label="操作" v-if="showOper" align="center" width="100">
        <template slot-scope="scope">
<!--          <router-link to="/student/activity/homeworkdetail" tag="button" >查看</router-link>-->
          <el-button @click="lookClick(scope.row)" id="lookbutton">查看</el-button>
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
        showOper:true,
        tableCol: [
          {prop: "name", label: "通知名称", width: 150},
          {prop: "Releasetime", label: "发布时间", width: 174},
          {prop: "releasepeople", label: "发布人", width: 107},
          {prop: "content", label: "通知内容", width:400},
         
        ],

        tableData: [
          
          {name: "5", Releasetime: "2020-01-01 4：50", releasepeople: "张老师", content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
          {name: "4", Releasetime: "2020-01-01 4：50", releasepeople: "张老师", content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
          {name: "3", Releasetime: "2020-01-01 4：50", releasepeople: "张老师", content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
          {name: "2", Releasetime: "2020-01-01 4：50", releasepeople: "张老师", content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
          {name: "1", Releasetime: "2020-01-01 4：50", releasepeople: "张老师", content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},

        ],

        userID: 'LQ',
        name: '',
        endDate: ''
      };
    },
    methods: {
      lookClick(e) {
        this.name = e.name
        this.endDate = e.endDate
        this.$router.push({
          path: '/student/activity/noticedetail',
          query: {
            userId: this.userID,
            name: this.name,
            endDate: this.endDate
          }
        })
        // this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
      },
	  deleteClick(e) {
	    this.name = e.name
	    this.endDate = e.endDate
	    this.$router.push({
	      path: '/student/activity/noticedetail',
	      query: {
	        userId: this.userID,
	        name: this.name,
	        endDate: this.endDate
	      }
	    })
	    // this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
	  },

      headeRowClass({row, column, rowIndex, columnIndex}){
        //表头的背景颜色
        if(rowIndex==0){
          return 'background:#DCDCDC; ';
        }
      },
    },
  };
</script>

<style scoped>
#table {
  font-weight: normal;
  
}

#lookbutton {
  background-color: white;
  color: dodgerblue;
  border: 2px
}

</style>