<template>
  <div>
      
    
    
    <div id="head">课程活动
        <p class="english">Activity</p>
    </div>
    <div class="sidebar">
    <activitybar></activitybar>
    </div>
    <div class="part">
    
    </div>
  </div>
</template>

<script>
import activitybar from '../activity/activitybar';
export default {
  name: "activitymain",
  components: {
    activitybar
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
  margin-top: 0%;
  background-color: rgb(228, 228, 228);
  float:left;
  
}

.sidebar{
    margin-top: 0%;
    float: left;
}
</style>
