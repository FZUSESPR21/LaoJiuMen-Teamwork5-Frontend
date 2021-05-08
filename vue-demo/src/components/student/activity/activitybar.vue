<template>
  <el-row class="tac">
    <el-col :span="25">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">

        <el-menu-item index="1">
          <router-link to="/student/activity/homeworklist"  tag="button" class="button">课程作业</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <router-link to="/student/activity/quiz"  tag="button" class="button">课程小测</router-link>
        </el-menu-item>

        <el-menu-item index="3">
          <router-link to="/student/activity/submittedhomeworklist" tag="button" class="button">已提交作业</router-link>
        </el-menu-item>

        <el-menu-item index="4">
          <router-link to="/student/activity/noticelist"  tag="button" class="button">通知列表</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data() {
      return {
        userID: 'kwz'
      }
    }
  }
</script>

<style>
.button{
  background-color: white;
  border: 2px
}

</style>
