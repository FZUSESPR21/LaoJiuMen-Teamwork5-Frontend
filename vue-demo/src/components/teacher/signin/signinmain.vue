<template>
  <div>
    <div id="head">签到
        <p class="english">Signin</p>
    </div>
    
    <div class="part">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "signinmain",
  components: {}
	  
    
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


</style>