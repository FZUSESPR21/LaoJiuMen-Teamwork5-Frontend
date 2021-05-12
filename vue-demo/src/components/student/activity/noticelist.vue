<template>
<div> 
  <div id="noticenav">
    <router-link to="/student/activity/noticelist" tag="button" >通知列表</router-link>     
    <router-link to="/student/activity/noticedetail" tag="button" >通知详情页面</router-link>     
  </div>
  <router-view id=content></router-view>
  <!--通知列表的展示-->
  <el-table class="noticetable"
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id号"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="notificationName"
      label="通知名称"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="content"
      label="通知内容"
      align="center">
    </el-table-column>
    <el-table-column
      prop="clazzId"
      label="班级"
      align="center">
    </el-table-column>
    <el-table-column
      prop="issue"
      label="发布人"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="releasedAt"
      label="通知时间"
      align="center">
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleCheck(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button type="text"
              @click="queryNotice1()">
      测试1
    </el-button>
    <el-button type="text"
              @click="queryNotice2()">
      测试2
    </el-button>
  
</div>
</template>

<script>
//import axios from 'axios'
  export default {
    name: "noticelist",
    keyword:'',
    data() {
      return {
       queryInfo:{
         query:'',
         pagenum:1,
         pagesize:5
       },
       res:{},
       url:'http://1.15.149.222:8080/coursewebsite/notice/all?'+row.clazzId,
       id:row.id
      }
    },
    /*
    created(){
      this.showNoticeListByClazzId();
    },
    methods:{
      async showNoticeListByClazzId(){
        const {data:res}=await this.$http.get('/notice/all',{params:this.queryInfo})
        console.log(res)
      }
      }
    */
    methods: {
      handleCheck(index, row) {
        console.log(index, row);
      },
      queryNotice1() {
        this.$axios({
          method: 'get',
          headers: {
            'Content-type': 'application/json;charset=UTF-8'
          },
          url: this.url,//clazzId
          // data:JSON.stringify({    //这里是发送给后台的数据
          //   username:username,
          //   password:password,
          // })
        }).then((response) => {          //这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          alert(response)
          alert("成功")
        }).catch((error) => {
          console.log(error)       //请求失败返回的数据
        })
      },

      queryNotice2() {
        let info = {
          id:this.id
        }
        this.$axios({
          method: 'post',
          headers: {
            'Content-type': 'application/json;charset=UTF-8'
          },
          url: 'http://1.15.149.222:8080/coursewebsite/notice/search',
          data:JSON.stringify(info)//上面的info
        }).then((response) => {          //这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          alert(JSON.stringify(response))
          this.res=response.data.data;
          var len=this.res.length;
          for(var i=0;i<len;i++){
            this.tableData[i].id=this.res[i].id;
            this.tableData[i].notificationName=this.res[i].notificationName;
            this.tableData[i].content=this.res[i].content;
            this.tableData[i].issuer=this.res[i].issuer;
            this.tableData[i].releasedAt=this.res[i].releasedAt;
            this.tableData[i].operate=this.res[i].operate;
          }
          alert("成功")
        }).catch((error) => {
          console.log(error)       //请求失败返回的数据
        })
      },
        tableData: [{
          id:'0',
          notificationName: '通知',
          content: 'xxxxx',
          issuer:'张三',
          releasedAt: '2016-05-02 19:27:59',                 
          operate: '查看'
        }]
      }
  }
    
    
  
</script>

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
.noticetable{
  margin-top:5%;
}


</style>
