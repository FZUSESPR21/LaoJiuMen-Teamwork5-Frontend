<template>
  <el-row class="tac">
    <el-col :span="25">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <router-link to="/teacher/source/study" tag="button" class="button">学习资源</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <router-link to="/teacher/source/other" tag="button" class="button">其他资源</router-link>
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
.button{
  background-color: white;
  border: 2px;
}

</style>
