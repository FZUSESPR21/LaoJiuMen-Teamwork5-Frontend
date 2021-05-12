<template>
  <div>
    <div id="head">学科成绩
      <p class="english">Result</p>
    </div>
    <div class="part">
      <router-link to="/teacher/result/resultlist" tag="button" >成绩列表</router-link>
      <router-link to="/teacher/result/resultinput" tag="button">成绩录入</router-link>
      <router-link to="/teacher/result/taskanalysis" tag="button">作业成绩分析</router-link>
      <router-link to="/teacher/result/finalanalysis" tag="button">期末成绩分析</router-link>

<!--<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="activeIndex"
      class="el-menu-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">作业列表</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">发布作业</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">通知列表</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
  -->
    </div>
    <div id="contents">
        <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "resultmain"
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
  height: 100%;
  width: 15%;
  float: left;
  text-align: center;
  margin-left: 0%;
  margin-top: 0;
}
button{
  height: 50px;
  width: 200px;
  border: none;
  background-color: white;
}
.router-link-active{
  color: white;

  background-color: #4ab2ee;
}
.router-link-active-focus{
  border: none;
}
#contents{
    float:left;
    margin-left: 17%;
    margin-top:-18%;
    width:90%;
}
#noticedeliver{
  margin-top:0%;
  background-color: white;
}
#noticehead{
  font-size:21px;
  margin-top:0.2%;
  margin-bottom:2%;
margin-left:7.5%;
}
.tac{
  width:30%;
  margin-top:10%;
}

</style>