<template>
  <div>
    <div id="editbox">
      <div id="edithead">
        <span id="headtitle">新建班级</span>
      </div>
      <div id="classmessage">
        <el-form  :rules="rules" >
          <el-form-item label="请输入班级名字：(推荐格式：年份+班级昵称)" prop="classname">
            <el-input placeholder="单行输入" v-model="classname" required size="small" id="classname"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div id="editfoot">
        <el-button id="cancelbtn" size="small">取消</el-button>
        <el-button type="primary" id="confirmbtn" size="small">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newclass",
  data(){
    return{
      classname:'',
      rules:{
        classname:[
          {required:true,message:'班级名字不能为空', trigger: 'blur'}
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
  height: 260px;
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
#classmessage{
  height: 130px;
  margin-top: 20px;
  margin-left: 6%;
  margin-right: 6%;
}
#editfoot{
  height: 80px;
  width: 100%;
  border-top: 1px solid #e7e4e4;
  border-radius: 0px 0px 10px 10px;
}
#classname{
  width: 100px;
  display: inline;
  float: left;
  margin-left: 100px;
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
