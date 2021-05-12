<template>
  <div>
    <div id="head">学科成绩
      <p class="english">Result</p>
    </div>
    <div class="part">
      <el-row class="cardgroup">
        <el-card class="box-card1">
          <div slot="header" class="clearfix">
            <span>期末笔试成绩：</span>
          </div>
          <div></div>
        </el-card>
        <el-card class="box-card2">
          <div slot="header" class="clearfix">
            <span>作业成绩：</span>
          </div>
          <div></div>
        </el-card>
        <el-card class="box-card3">
          <div slot="header" class="clearfix">
            <span>期末总成绩：</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card4">
          <div slot="header" class="clearfix">
            <span>小测成绩：</span>
          </div>
          <div></div>
        </el-card>
        <el-card class="box-card5">
          <div slot="header" class="clearfix">
            <span>考勤、课堂成绩：</span>
          </div>
          <div></div>
        </el-card>
      </el-row>
    </div>
  </div>
</template>





<script>
export default {
  name: "resultshow"
}
</script>


<style>
.text {
  font-size: 14px;
  width:100%;
}

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card1 {
  width: 20%;
  border-radius: 30px;
  margin-top:10%;
  background-color: rgb(196, 255, 196);
  float: left;
}
.box-card2 {
  width: 15%;
  border-radius: 30px;
  margin-top:8%;
  background-color:rgb(236, 196, 255);
  float:right;
}
.box-card3 {
  width: 80%;
  border-radius: 30px;
  margin-top:-5%;
  margin-left: 14%;
  float: left;
  background-color:rgb(162, 229, 255)
}
.box-card4 {
  width: 15%;
  border-radius: 30px;
  margin-top:-2%;
  margin-left: 10%;
  float: left;
  background-color:rgb(255, 202, 202)
}
.box-card5 {
  width: 22%;
  border-radius: 30px;
  margin-top:-11%;
  margin-left: 75%;
  float: left;
  background-color:rgb(255, 255, 189)
}
.cardgroup{
  margin-top:5%;
  background-color: white;
}
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

}
</style>
