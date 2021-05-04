<template>
  <div>
    <div id="classname">
      班级：
      <el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" size="mini">新建班级</el-button>
    </div>
    <div id="stulistbox">
      <div id="stulist">
        <div id="listhead">
          <el-checkbox id="totaldelete"></el-checkbox>
          <span id="accounthead">学号</span>
          <span id="namehead">姓名</span>
          <span id="emailhead">邮箱</span>
          <span id="oprationhead">操作</span>
        </div>
        <div v-for="item in studentlist">
          <div id="listitem">
            <el-checkbox id="itemcheckbox"></el-checkbox>
            <div id="item">
              <span id="account">{{ item.account }}</span>
              <span id="studentname">{{ item.student_name }}</span>
              <span id="email">{{ item.email }}</span>
              <el-button type="text" id="itemeditbtn">编辑</el-button>
              <el-button type="text" id="itemdelbtn">删除</el-button>
            </div>
          </div>
        </div>
        <div id="listfoot">
          <el-button size="mini" id="totaldeletebtn">删除</el-button>
          <el-button size="mini" id="uploadbtn" icon="el-icon-upload2">上传Excel生成学生列表</el-button>
          <el-button size="mini" id="downloadbtn" icon="el-icon-download">下载上传须知</el-button>
          <el-button size="mini" type="primary" id="newstu">新增</el-button>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            id="pagination">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "studentlist",
  data(){
    return{
      options: [{
        value: '选项1',
        label: '2021年S班'
      }, {
        value: '选项2',
        label: '2021年W班'
      }, {
        value: '选项3',
        label: '2020年S班'
      }, {
        value: '选项4',
        label: '2020年W班'
      }],
      value: '',
      studentlist: [
        {
          account:'221801000',
          student_name:'小宋',
          email:'1111111111@qq.com'
        },
        {
          account:'221801001',
          student_name:'小张',
          email:'1111111112@qq.com'
        },
        {
          account:'221801002',
          student_name:'小李',
          email:'1111111113@qq.com'
        },
        {
          account:'221801003',
          student_name:'小林',
          email:'1111111114@qq.com'
        },
        {
          account:'221801004',
          student_name:'小王',
          email:'1111111115@qq.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
#classname{
  float: right;
  margin-top: -40px;
  margin-right: 45px;
}
#stulistbox{
  margin-top: 4px;
  margin-left: 7px;
  margin-right: 5px;
  border: 1px solid #c2c1c1;
  border-radius: 20px;
}
#stulist{
  margin-left: 10%;
  margin-right: 10%;
  font-size: 12px;
}
#listhead{
  margin-top: 20px;
}
#totaldelete{
  margin-right: 8%;
}
#accounthead{
  margin-right: 15%;
}
#namehead{
  margin-right: 15%;
}
#emailhead{
  margin-right: 44%;
}
#listitem{
  height: 35px;
  margin-top: 10px;

}
#itemcheckbox{
  margin-top: 6px;
}
#item{
  background-color: #fafafa;
  float: right;
  width: 97%;
  height: 100%;
  border: 1px solid #dcdbdb;
  border-radius: 8px;
  line-height: 300%;
}
#account{
  margin-left: 5%;
}
#studentname{
  margin-left: 13%;
}
#email{
  margin-left: 11%;
}
#itemdelbtn{
  float: right;
  margin-right: 1%;
}
#itemeditbtn{
  float: right;
  margin-right: 3%;
}
#listfoot{
  margin-top: 20px;
  margin-bottom: 100px;
}
#totaldeletebtn{
  color: red;
  border: 1px solid red;
}
#downloadbtn{
  color: red;
  border: 1px solid red;
}
#pagination{
  float: right;
}
</style>
