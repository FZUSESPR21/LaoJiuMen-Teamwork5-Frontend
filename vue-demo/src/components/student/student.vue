<template>
  <div>
    <Header></Header>
    <cloudimg></cloudimg>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cloudimg from '../Layout/cloudimg.vue';
import Header from "../Layout/Header";
import photo from "../Layout/photo";

export default {
  name: "student",
  components: {
    Header,
    photo,
    Cloudimg
  }
}
</script>

<style scoped>
#content{
  
  margin-top: -10%;
  margin-left: 15%;
  margin-right: 15%;
}

</style>
