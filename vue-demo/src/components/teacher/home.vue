<template>
  <div>
      <div id="head">首页</div>
    <h3>我是老师首页</h3>
    <p>我是首页内容，1111111111111</p>
    <el-button type="warning" >警告按钮</el-button>
    <el-button type="danger" >危险按钮</el-button>

  </div>
</template>

<script>

export default {
  components: { home },
  name: "home",
}
</script>

<style scoped>
#head{
  background-color: white;
  font-size: 20px;
  height: 100px;
}
</style>
