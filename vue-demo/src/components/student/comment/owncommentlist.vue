<template>
  <div>
    <div class="part">
      <!--      search部分-->
      <div class="searchPart">
        <form>
          <input type="text" placeholder="搜索" id="search"></input>
          <el-button class="searchBtn">发表新话题</el-button>
        </form>

      </div>
      <!--      title&contain-->
      <div class="titleContain">
        <div class="title">
          标题：
        </div>
        <input type="text"  placeholder="输入标题" class="titleText">

        </input>
        <div class="contain">
          内容：
        </div>
        <input type="text"  placeholder="输入内容" class="containText">

        </input>
      </div>
      <!--      讨论列表-->
      <ul id="app">
        <li>
          <div class="comment-item">
            <div class="comment-title">
              蚂蚁金服设计
            </div>
            <div class="comment-contains" @click="ToOwnDetails">
              段落示意：加减法冷风机阿里
            </div>
            <div class="comment-info">
              <span class="comment-name">林东</span>
              <span>发布于</span>
              <span class="comment-time">2002.08.19</span>
              <el-button class="deleteBtn">删除</el-button>
            </div>

          </div>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "owncommentlist",
  methods:{
    ToOwnDetails:function (){
      this.$router.push({
        path: '/student/comment/owncommentdetail',
      })
    }
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
  margin-top: -15px;
  background: rgb(255,255,255);
  border: rgb(186,186,186) solid 1px;
  box-shadow: 5px 5px 10px #b6b4b4 ;
  margin-bottom: 10px;
}

/*searchPart*/
.searchPart{
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: rgb(190,188,191) 1px solid;
}
.searchBtn{
  background: rgb(57,187,255);
  color: white;
  float: right;
  height: 90%;
  margin-right: 10px;
  margin-top: 5px;
}
#search{
  margin-top: auto;
}

#search{
  height: 25px;
  border-radius: 5px;
  padding-left: 5px;
  width: 700px;
  text-align: center;
  border: none;
  margin-left: 4%;
}
/*讨论详情style*/
ul{
  padding:0;
}
li{
  list-style: none;
  width: 100%;
}
.comment-title{
  font-size: 18px;
  font-family: bold;
  margin-bottom: 8px;
}
.comment-item{
  width: 96%;
  margin-left: 2%;
  height: 180px;
  font-size: 13px;
  border-bottom: 1px solid rgb(185,185,185);
  background: rgb(255,255,255);
}
.comment-time,.comment-name{
  color: deepskyblue;
}
.comment-contains{
  width: 100%;
  height: 60%;
}
.comment-info{
  margin-bottom: 2px;
}
.deleteBtn{
  margin-bottom: 2px;
  float: right;
  color: red;
  border: red 1px solid;
  height: 5px;
  margin-right: 10px;
  line-height: 5px;
}

/*分页*/
.block{
  margin-top:20px;
  margin-bottom: 20px;
}
/*.page{*/
/*  margin-right: 0;*/
/*}*/
/*bottom发表评论*/
.comment-left{
  height: 80px;
  line-height: 80px;
  padding-left: 10px;
  border: black solid 1px;
  width: 8%;
  float: left;
}
.comment-text{
  height: 80px;
  float: right;
  resize: none;
  border: black solid 1px;
  padding-top: 0;
  width: 89%;
}
.submitBtn{
  margin-top:20px;
  float: right;
  background: rgb(57,187,255);
  color: white;
}
/*虚线*/
.dash{
  height: 0;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: black 1px dashed;
}
/*title&contain*/
.titleContain{
  height: 180px;
  border-top: rgb(227,227,227) 1px solid;
  padding-top: 20px;

}
.title{
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  border: rgb(187,187,187) solid 1px;
  width: 6%;
  float: left;
  margin-left: 4.5%;
}
.contain{
  height: 100px;
  line-height: 80px;
  padding-left: 10px;
  border: rgb(187,187,187) solid 1px;
  margin-top: 10px;
  width: 6%;
  float: left;
  margin-left: 4.5%;
}
.titleText{
  height: 30px;
  float: right;
  resize: none;
  border: rgb(187,187,187) solid 1px;
  padding-top: 0;
  margin-right: 4.5%;
  width: 82%;
}
.containText{
  height: 100px;
  float: right;
  resize: none;
  border: rgb(187,187,187) solid 1px;
  padding-top: 0;
  margin-top: 10px;
  width: 82%;
  margin-right: 4.5%;
}

</style>
