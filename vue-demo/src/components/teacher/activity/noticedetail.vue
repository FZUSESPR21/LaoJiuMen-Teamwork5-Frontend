<template>
<el-card class="bcard">
  <div slot="header" class="clearfix">
    <span>《软件工程》远程教学说明</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'通知内容 ' + o }}
  </div>
</el-card>
</template>

<script>
export default {
  name: "noticedetail"
}
</script>


<style>
.text {
  font-size: 14px;
  width:100%;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.clearfix{
  font-size: 30px;
  text-align: center;
}

.bcard {
  width: 100%;
  border-radius: 30px;
}
</style>

<style scoped>
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
  background-color: rgb(228, 228, 228);
}
</style>