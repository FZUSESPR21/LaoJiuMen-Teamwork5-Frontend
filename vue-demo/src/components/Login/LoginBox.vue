<template>
  <div>
    <div id="login">
      <p id="title">登录</p>
      <div id="type">
        <el-radio v-model="type" label="student">学生</el-radio>
        <el-radio v-model="type" label="teacher">教师</el-radio>
      </div>
      <div id="accountbox">
        <el-input placeholder="请输入账号" v-model="account" clearable id="account" prefix-icon="el-icon-user-solid"></el-input>
      </div>
      <div id="pwdbox">
        <el-input placeholder="请输入密码" v-model="pwd" show-password id="pwd" prefix-icon="el-icon-lock"></el-input>
      </div>
      <div>
        <button @click="login" id="loginbtn">登录</button>
      </div>
    </div>
    <div id="forgetbox">
      <router-link to="/login/setPassword" id="forget">忘记密码？</router-link>
    </div>

    <button @click="teacherlogin" id="teacherlogin">教师登录</button>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data(){
    return{
      type: '',
      account: '',
      pwd: '',
    }
  },
  methods: {
    login:function (){
      this.$router.push('/student')
    },
    teacherlogin:function (){
      this.$router.push('/teacher')
    }
  }
}
</script>

<style scoped>

#login{
  margin-top: 17%;
  margin-left: 17%;
  margin-right: 17%;
  position: relative;
}
#title{
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}
#type{
  text-align: center;
}
#accountbox{
  margin-top: 25px;
}
#pwdbox{
  margin-top: 20px;
}
#loginbtn{
  margin-top: 50px;
  height: 55px;
  width: 100%;
  border: 0;
  font-size: 23px;
  color: white;
  border-radius: 50px;
  background: linear-gradient(to bottom, #3333d7, #03036d);
}
#forgetbox{
  margin-top: 40px;
  margin-right: 40px;
  text-align: right;
}
#forget{
  text-decoration: none;
  font-size: 10px;
}
a:link,a:active{
  color: black;
}
</style>
