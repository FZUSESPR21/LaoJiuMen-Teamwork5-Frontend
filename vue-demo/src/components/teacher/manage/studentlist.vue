<template>
  <div>
    <div id="classname">
      班级：
      <el-select v-model="classvalue" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" size="mini" @click="createclass">新建班级</el-button>
    </div>
    <div id="stulistbox">
      <div id="stulist">
        <div id="listhead">
          <input type="checkbox" id="selectAll" :checked="selectArr.length === studentlist.length" @change='selectAll()'></input>
          <span id="accounthead">学号</span>
          <span id="namehead">姓名</span>
          <span id="emailhead">邮箱</span>
          <span id="oprationhead">操作</span>
        </div>
        <div v-for="(item,index) in studentlist">
          <div id="listitem">
            <input type="checkbox" id="itemcheckbox" :checked="selectArr.indexOf(item.studentId) > -1"  @change='selectOne(item.studentId)'></input>
            <div id="item">
              <span id="account">{{ item.account }}</span>
              <span id="studentname">{{ item.student_name }}</span>
              <span id="email">{{ item.email }}</span>
              <el-button type="text" id="itemeditbtn">编辑</el-button>
              <el-button type="text" id="itemdelbtn" @click="deleteOne">删除</el-button>
            </div>
          </div>
        </div>
        <div id="listfoot">
          <el-button size="mini" id="deleteSelbtn" @click="deleteSel">删除</el-button>
          <el-upload
            id="uploadbtn"
            action
            accept=".xls,.xlsx"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="handlefile"
          >
            <el-button size="mini"  icon="el-icon-upload2">上传Excel生成学生列表</el-button>
          </el-upload>
          <el-button size="mini" id="downloadbtn" icon="el-icon-download">下载上传须知</el-button>
          <el-button size="mini" type="primary" id="newstu" @click="createstudent">新增</el-button>
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
import xlsx from 'xlsx'
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
      classvalue: '',
      selectArr:[],
      isCheckedAll:false,
      studentlist: [
        {
          studentId:'1',
          account:'221801000',
          student_name:'小宋',
          email:'1111111111@qq.com',
        },
        {
          studentId:'2',
          account:'221801001',
          student_name:'小张',
          email:'1111111112@qq.com',
        },
        {
          studentId:'3',
          account:'221801002',
          student_name:'小李',
          email:'1111111113@qq.com',
        },
        {
          studentId:'4',
          account:'221801003',
          student_name:'小林',
          email:'1111111114@qq.com',
        },
        {
          studentId:'5',
          account:'221801004',
          student_name:'小王',
          email:'1111111115@qq.com',
        }
      ]
    }
  },
  methods:{
    createstudent (){
      this.$router.push('/teacher/manage/createstudent')
    },
    createclass(){
      this.$router.push('/teacher/manage/createclass')
    },
    deleteOne (index){

    },
    deleteSel (){

    },
    selectOne (studentId) {
      let idIndex = this.selectArr.indexOf(studentId)
      if (idIndex >= 0) {
        this.selectArr.splice(idIndex, 1)
      } else {
        this.selectArr.push(studentId)
      }
    },
    selectAll(){
      this.isCheckedAll = !this.isCheckedAll
      if (this.isCheckedAll) {
        this.selectArr = []
        const _that = this
        this.studentlist.forEach((val,index) =>{
          this.selectArr.push(val.studentId)
        })
      } else {
        this.selectArr = []
      }
    },
    async handlefile(ev){
      let file = ev.raw
      if (!file) return

      let data = await new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = ev => {
          resolve(ev.target.result)
        }
      })
      let workbook = xlsx.read(data,{type:"binary"})
      let worksheet = workbook.Sheets[workbook.SheetNames[0]]
      data = xlsx.utils.sheet_to_json(worksheet)
      let data1= JSON.parse(JSON.stringify(data).replace(/学号/g,"account"))
      let data2= JSON.parse(JSON.stringify(data1).replace(/姓名/g,"student_name"))
      let finaldata= JSON.parse(JSON.stringify(data2).replace(/邮箱/g,"email"))
      for (let i = 0;i < finaldata.length;i++){
        finaldata[i].studentId = (i+1).toString()
      }
      this.studentlist = finaldata

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
#selectAll{
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
  margin-top: 10px;
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
#deleteSelbtn{
  color: red;
  border: 1px solid red;
}
#uploadbtn{
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}
#downloadbtn{
  color: red;
  border: 1px solid red;
}
#pagination{
  float: right;
}
</style>
