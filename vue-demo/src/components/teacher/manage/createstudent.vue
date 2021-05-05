<template>
  <div id="editbox">
    <div id="edithead">
      <span id="headtitle">编辑学生</span>
    </div>
    <div id="stumessage">
      <span id="messagetitle">学生信息</span>
      <el-form :model="stumessage" :rules="rules" >
        <el-form-item label="学号" prop="account">
          <el-input placeholder="请输入学号" v-model="stumessage.account" required size="small"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="stumessage.name" required size="small"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input placeholder="请输入邮箱" v-model="stumessage.email" required size="small"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div id="editfoot">
      <el-button id="cancelbtn" size="small">取消</el-button>
      <el-button type="primary" id="confirmbtn" size="small">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "newstudent",
  data(){
    return{
      stumessage: {
        account: '',
        name:'',
        email:''
      },
      rules:{
        account:[
          {required:true,message:'学号不能为空', trigger: 'blur' }
        ],
        name: [
          {required:true,message:'姓名不能为空', trigger: 'blur' }
        ],
        email: [
          {required:true,message:'邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>
#editbox{
  border-radius: 10px;
  box-shadow: 2px 6px 10px #d9d9f5;
  height: 430px;
  margin-top: 20px;
  margin-left: 7%;
  margin-right: 7%;
}
#edithead{
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  border-radius: 10px 10px 0px 0px;
}
#headtitle{
  font-size: 13px;
  font-weight: bold;
  margin-left: 3%;
  line-height: 400%;
}
#stumessage{
  height: 300px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10px;
}
#messagetitle{
  font-size: 15px;
  font-weight: bold;
}
.el-form-item{
  margin-bottom: 10px;
}
#editfoot{
  height: 80px;
  width: 100%;
  border-top: 1px solid #e7e4e4;
  border-radius: 0px 0px 10px 10px;
}
#cancelbtn{
  width: 65px;
  float: right;
  margin-right: 5%;
  margin-top: 10px;
  color: #2caff6;
  border-color: #2caff6;
}
#confirmbtn{
  width: 65px;
  float: right;
  margin-right: 2%;
  margin-top: 10px;
}
</style>
