<template>
  <div>
    <div id="login">
      <p id="title">设置新密码</p>
      <div id="type">
        <el-radio v-model="type" label="student">学生</el-radio>
        <el-radio v-model="type" label="teacher">教师</el-radio>
      </div>
      <div id="emailbox">
        <el-input placeholder="请输入邮箱" v-model="email" clearable id="email" prefix-icon="el-icon-message"></el-input>
      </div>
      <div id="verificationbox">
        <el-input placeholder="请输入验证码" v-model="verification" id="verification" prefix-icon="el-icon-key" style="float: left; width: 180px;margin-right: 5px"></el-input>
        <el-button id="verificationbtn" >发送验证码</el-button>
      </div>
      <div id="accountbox">
        <el-input placeholder="请输入账号" v-model="account" clearable id="account" prefix-icon="el-icon-user-solid"></el-input>
      </div>
      <div id="newpwdbox">
        <el-input placeholder="请输入新密码" v-model="pwd" show-password id="pwd" prefix-icon="el-icon-lock"></el-input>
      </div>
      <div id="againpwdbox">
        <el-input placeholder="请再次输入新密码" v-model="pwdconfirm" show-password id="pwdconfirm" prefix-icon="el-icon-lock"></el-input>
      </div>
      <div>
        <button @click="setnewpwd" id="confirmbtn">确定</button>
      </div>
    </div>
    <div id="directloginbox">
      <router-link to="/login/login" id="directlogin">直接登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetPassword",
  data(){
    return{
      type: '',
      email: '',
      verification: '',
      account: '',
      pwd: '',
      pwdconfirm: '',
    }
  },
  methods:{
    setnewpwd:function (){
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
#login{
  margin-top: 7%;
  margin-left: 17%;
  margin-right: 17%;
  position: relative;
}
#title{
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}
#type{
  text-align: center;
}
#emailbox{
  margin-top: 15px;
}
#verificationbox{
  margin-top: 15px;
  width: 100%;
}
#accountbox{
  margin-top: 15px;
}
#newpwdbox{
  margin-top: 15px;
}
#againpwdbox{
  margin-top: 15px;
}
#confirmbtn{
  margin-top: 25px;
  height: 55px;
  width: 100%;
  border: 0;
  font-size: 23px;
  color: white;
  border-radius: 50px;
  background: linear-gradient(to bottom, #3333d7, #03036d);
}
#directloginbox{
  margin-top: 10px;
  margin-right: 50px;
  text-align: right;
}
#directlogin{
  text-decoration: none;
  font-size: 10px;
}
a:link,a:active{
  color: black;
}
</style>

