<template>
  <div>
    <Studentheader></Studentheader>
    <cloudimg></cloudimg>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cloudimg from '../Layout/cloudimg.vue';
import Header from "../Layout/StudentHeader";
import Studentheader from "../Layout/StudentHeader";

export default {
  name: "student",
  components: {
    Studentheader,
    Header,
    Cloudimg
  }
}
</script>

<style scoped>
#content{
  width: 70%;
  position: relative;
  margin-top: -10%;
  margin-left: 15%;
  margin-right: 15%;
}

</style>
