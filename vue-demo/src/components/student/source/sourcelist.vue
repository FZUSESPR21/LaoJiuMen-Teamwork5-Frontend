<template>

  <div>
    <div id="head">课程资源
      <p class="english">Source</p>
    </div>
    <div class="part">

    </div>
  </div>
</template>

<script>
import Sourcebar from "./sourcebar";
export default {
  name: "sourcelist",
  components: {Sourcebar}
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
  margin-top: -15px;
  background-color: rgb(228, 228, 228);
}
</style>
