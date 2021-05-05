<template>
  <div>
    <div id="login">
      <p id="title">设置新密码</p>
      <el-form>
        <el-form-item id="type">
          <el-radio-group v-model="type">
            <el-radio label="student">学生</el-radio>
            <el-radio label="teacher">教师</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item id="emailbox">
          <el-input placeholder="请输入邮箱" v-model="email" clearable id="email" prefix-icon="el-icon-message"></el-input>
        </el-form-item>
        <el-form-item id="verificationbox">
          <el-input placeholder="请输入验证码" v-model="verification" id="verification" prefix-icon="el-icon-key" style="float: left; width: 180px;margin-right: 5px"></el-input>
          <el-button id="verificationbtn" >发送验证码</el-button>
        </el-form-item>
        <el-form-item id="accountbox">
          <el-input placeholder="请输入账号" v-model="account" clearable id="account" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item id="newpwdbox">
          <el-input placeholder="请输入新密码" v-model="pwd" show-password id="pwd" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item id="againpwdbox">
          <el-input placeholder="请再次输入新密码" v-model="pwdconfirm" show-password id="pwdconfirm" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <button @click="setnewpwd" id="confirmbtn">确定</button>
        </el-form-item>
      </el-form>
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
  margin-bottom: 0;
}
#type{
  text-align: center;
}
#emailbox{
  margin-top: 5px;
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
.el-form-item{
  margin-bottom: 0;
}
</style>

