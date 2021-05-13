<template>
  <div>
    <div id="head">
      学生管理
      <p class="english">Student</p>
    </div>
    <div class="part">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "studentmanage"
}
</script>

<style scoped>
#head{
  font-size: 20px;
  height: 75px;
  margin-left: 50px;
  margin-top: 25px;
}

.english{
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

</style>
