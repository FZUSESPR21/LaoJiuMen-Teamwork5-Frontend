<template>
  <div>
    <p>设置新密码</p>
    <div>
      <el-radio v-model="type" label="student">学生</el-radio>
      <el-radio v-model="type" label="teacher">教师</el-radio>
    </div>
    <div>
      <el-input placeholder="请输入邮箱" v-model="email" clearable id="email"></el-input>
      <el-input placeholder="请输入接收到的验证码" v-model="verification" clearable id="verification"></el-input>
      <el-input placeholder="请输入账号" v-model="account" clearable id="account"></el-input>
      <el-input placeholder="请输入新密码" v-model="pwd" show-password id="pwd"></el-input>
      <el-input placeholder="请再次输入新密码" v-model="pwdconfirm" show-password id="pwdconfirm"></el-input>
    </div>
    <div>
      <el-button @click="">确定</el-button>
    </div>
    <router-link to="/login/login">登录</router-link>
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
  }
}
</script>

<style scoped>

</style>
