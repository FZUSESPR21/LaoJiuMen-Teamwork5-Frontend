<template>
  <div>
    <div id="head">课程活动
      <p class="english">Activity</p> 
    </div>
    <div class="part">
      <div id="noticenav">
        <router-link to="/student/activity/noticelist" tag="button" >通知列表</router-link>     
        <router-link to="/student/activity/noticedetail" tag="button" >通知详情页面</router-link>     
      </div>
      <router-view id=content></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "activitymain"
}
</script>

<style scoped>
#activitybar{
  width: 100%;
  height: 500px;
  float: left;
}

#noticenav{
  height: 200px;
  float: left;
  width:20%;
  text-align: center;
  margin-left: 0px;
  margin-top:3%
}
#content{
  float:right;
  margin-right: 0%;
  width:80%;
}
button{
  height: 50px;
  width: 200px;
  border: none;
  background-color: white;
}
#logo{
  margin-left: 140px;
  height: 100%;
}
#icon{
  height:50%;
  width: 5%;
  float: right;
  margin-top:1.5%;
  margin-right: -15%;
}
#exit{
  height:70%;
  width: 50px;
  float: right;
  margin-top:0.8%;
  margin-right: -22%;
  border: 1px;
  border-style:dotted;
  border-block-color: black;
}
.router-link-active{
  color: white;
  background-color: #4ab2ee;
}
.router-link-active-focus{
  border: none;
}
#head{
  background-color: white;
  font-size: 20px;
  height: 100px;
  margin-top: 8%;
}

.english{
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

.part{
  margin-top: -4%; 
}
</style>
