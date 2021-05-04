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
          <router-link to="/student/activity/homeworklist"  tag="button" >课程作业</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">课程小测</span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-document"></i>
<!--          <span slot="title">已提交作业</span>-->
          <router-link to="/student/activity/submittedhomeworklist" tag="button" >已提交作业</router-link>
        </el-menu-item>

        <el-menu-item index="4">
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
