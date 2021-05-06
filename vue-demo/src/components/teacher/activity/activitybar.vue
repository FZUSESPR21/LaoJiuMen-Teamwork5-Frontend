<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">

        <el-menu-item index="1">
          <i class="el-icon-location"></i>
<!--          <span slot="title">课程作业</span>-->
          <router-link to="/teacher/activity/homeworklist" tag="button" class="button">作业列表</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
<!--          <span slot="title">发布作业</span>-->
          <router-link to="/teacher/activity/publishhomework" tag="button" class="button">发布作业</router-link>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">通知列表</span>
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
