<template>
  <div>
    <Teacherheader></Teacherheader>
    <cloudimg></cloudimg>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cloudimg from '../Layout/cloudimg.vue';
import Header from "../Layout/TeacherHeader";
import Teacherheader from "../Layout/TeacherHeader";

export default {
  name: "teacher",
  components: {
    Teacherheader,
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
