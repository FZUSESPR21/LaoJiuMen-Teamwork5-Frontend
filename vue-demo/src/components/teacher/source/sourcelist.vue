<template>
  <div>
    <div id="head">课程资源
      <p class="english">Source</p>
    </div>

    <div class="sidebar">
      <sourcebar></sourcebar>
    </div>

    <div class="part">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sourcebar from "../source/sourcebar";
export default {
  name: "sourcelist",
  components: {
    sourcebar
  }
}
</script>

<style scoped>
#head{
  font-size: 20px;
  height: 100px;
}

.english{
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

.part{
  margin-top: 0;
  background-color: rgb(255, 252, 252);
  float:left;
  width: 950px;
}

.sidebar{
  margin-top: 0;
  float: left;
}
</style>
