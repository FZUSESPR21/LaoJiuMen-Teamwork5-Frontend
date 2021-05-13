<template>
  <div>
    <div id="head">答疑讨论
      <p className="english">QA</p>
    </div>
    <div className="part">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "main",
  components: {

  }
}


</script>

<style scoped>
#head {
  font-size: 20px;
  height: 100px;
}

.english {
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

.part {
  margin-top: 0%;
  background-color: rgb(228, 228, 228);
  float: left;

}

.sidebar {
  margin-top: 0%;
  float: left;
}
</style>
