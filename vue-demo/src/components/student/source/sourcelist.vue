<template>
  <div>
    <div id="head">
      <span id="head1">课程资源</span>
      <br>
      <span id="head2">Source</span>
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

  #head1 {
    position: absolute;
    left: 30px;
    width: 200px;
    padding: 5px;
    margin-top: 20px;
  }

  #head2 {
    color: rgb(179, 179, 179);
    margin-top: 0;
    font-size: 15px;

    position: absolute;
    left: 30px;
    width: 200px;
    padding: 5px;
    margin-top: 20px;
  }

  .part{
    margin-top: 0;
    background-color: rgb(228, 228, 228);
    float:left;
    width: 900px;
  }

  .sidebar{
    margin-top: 0;
    float: left;
  }
</style>
