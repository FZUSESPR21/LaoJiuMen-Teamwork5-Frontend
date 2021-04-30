<template>

  <div id="app">
    <div id="content">
      <div id="loginbox">
        <router-link to="/login/login">登录</router-link>
        <router-link to="/login/setPassword">设置新密码</router-link>
        <router-view></router-view>
        <button @click="login">确定</button>
        <button @click="teacherlogin">教师登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
#nav_box{
  width: 100%;
  height: 60px;
}
#logo{
  margin-left: 140px;
  height: 100%;
}
#content{
  width: 102%;
  height: 800px;
  background-color: #27217c;
  margin:-1%;
}
#loginbox{
  width: 30%;
  height:60%;
  float: right;
  margin-right: 15%;
  margin-top: 10%;
  background-color: white;
}
</style>
