<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>通知详情</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'内容 ' + o }}
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
  content: "";

}
.clearfix:after {
  clear: both
}
.clearfix{
      font-size: 30px;
  text-align: center;
}

.box-card {
  width: 100%;
  border-radius: 30px;
  margin-top: -15%;
}
</style>

