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
<!--          <span slot="title">学习资源</span>-->
          <router-link to="/student/source/study" tag="button" >学习资源</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
<!--          <span slot="title">其他资源</span>-->
          <router-link to="/student/source/other" tag="button" >其他资源</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<script>
/*export default {
  name: "sourcebar"
}*/
  export default {
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

</style>
