<template>
  <div id>

    <div>
      <span>新建资源</span>
    </div>

    <div id="clazz">
      <span>班级：</span>
      <el-select size="mini" v-model="clazzValue" placeholder="请选择班级">
        <el-option
          v-for="item in classOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <br>

    <div>
      <el-form :model="publishForm" :rules="rules" ref="publishForm" label-position="top">
        <el-form-item label="资源信息" class="label">
          <i class="el-icon-star-on">选择分组</i>
          <br>
          <el-select v-model="typeValue" placeholder="课程资源">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

<!--        <el-form-item label="资源内容" class="label">
          <i class="el-icon-star-on">资源标题</i>
          <el-input v-model="publishForm.title" placeholder="请输入资源标题" resize="none"></el-input>
        </el-form-item>-->

        <el-form-item>
          <i class="el-icon-star-on">上传文件</i>
          <br>

          <input class="file" name="file" type="file"  @change="select"/>

          <p id="p">支持格式：.pdf，单个文件不超过20MB</p>
        </el-form-item>

        <el-form-item>
          <el-button id="cancel" type="primary" plain size="mini" @click="cancelClick">取消</el-button>
          <el-button class="button" type="primary" plain size="mini">预发布</el-button>
          <el-button class="button" type="primary" plain size="mini" @click="publishClick">发布</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
export default {
  name: "addsource",
  data() {
    return {

      classOptions: [{
        value: 1,
        label: '2021级S班'
      }, {
        value: 2,
        label: '2020级S班'
      }, {
        value: 3,
        label: '2019级S班'
      }],
      clazzValue: 1,

      typeOptions: [{
        value: 0,
        label: '学习资源'
      }, {
        value: 1,
        label: '教学大纲'
      }, {
        value: 2,
        label: '教学计划'
      }],
      typeValue: 0,

      publishForm: {
        title: ''
      },

      url: '',
      tId: 1,
      file: '',
    }
  },

  methods: {
    select (e) {
      console.log(this.tId)
      console.log(this.clazzValue)
      console.log(this.typeValue)
      this.file = e.target.files[0]
      // console.log(file)

    },


    cancelClick() {
      this.$router.push({
        path: '/teacher/source/other',
        query: {

        }
      })
    },


    publishClick(){//确定上传
      let param = new FormData() // 创建form对象
      param.append('file', this.file, this.file.name) // 通过append向form对象添加数据
      param.append('teacherId', this.tId)
      param.append('clazzId',this.clazzValue)
      param.append('type',this.typeValue)// 添加form表单中其他数据
      // withCredentials: true 使得后台可以接收表单数据  跨域请求
      const instance = this.$axios.create({
        withCredentials: true
      })
      // url为后台接口
      instance.post('http://localhost:8088/coursewebsite_war_exploded/upload', param)
        .then(this.succ) // 成功返回信息 调用函数  函数需自己定义，此处后面省略
        .catch(this.serverError) // 服务器错误 调用对应函数  函数需自己定义，此处后面省略
    }
  }
}
</script>

<style scoped>
#clazz {
  float: right;
}

#uploadbutton {
  color: black;
  background-color: white;
}

.label {
  font-weight: bold;
  font-size: 10px;
}

#p {
  font-weight: lighter;
}

.button {
  color: white;
  background-color: #4ab2ee;
  float: right;
}

#cancel {
  color: #4ab2ee;
  background-color: white;
  float: right;
}
</style>
