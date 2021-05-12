<template>
<div>
  <div id="head">课程活动
    <p class="english">Activity</p>
  </div>
  <div class="part">
    <router-link to="/teacher/activity/noticelist" tag="button" >通知列表</router-link>
    <router-link to="/teacher/activity/noticedetail" tag="button">通知内容</router-link>
    <router-link to="/teacher/activity/noticedeliver" tag="button">发布通知</router-link>

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
  <router-view id=content></router-view>
</div>
</template>


<script>
export default {
  name: "activitymain",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
#noticedeliver{
  margin-top:0%;
  background-color: white;
  /*border-style:solid;
  border-width:1px;
  border-color:gray;
  border-radius:20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
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