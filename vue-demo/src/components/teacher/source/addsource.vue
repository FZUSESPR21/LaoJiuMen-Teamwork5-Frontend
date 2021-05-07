<template>
  <div id>

    <div>
      <span>新建资源</span>
    </div>

    <div id="clazz">
      <span>班级：</span>
      <el-select size="mini" v-model="classValue" placeholder="请选择班级">
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

        <el-form-item label="资源内容" class="label">
          <i class="el-icon-star-on">资源标题</i>
          <el-input v-model="publishForm.title" placeholder="请输入资源标题" resize="none"></el-input>
        </el-form-item>

        <el-form-item>
          <i class="el-icon-star-on">上传文件</i>
          <br>
          <el-button size="mini" icon="el-icon-folder-opened" id="uploadbutton">上传文件</el-button>
          <p id="p">支持格式：.pdf，单个文件不超过20MB</p>
          <i class="el-icon-folder-opened"></i>
        </el-form-item>

        <el-form-item>
          <el-button id="cancel" type="primary" plain size="mini">取消</el-button>
          <el-button class="button" type="primary" plain size="mini">预发布</el-button>
          <el-button class="button" type="primary" plain size="mini">发布</el-button>
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
        value: '班级1',
        label: '2021级S班'
      }, {
        value: '班级2',
        label: '2020级S班'
      }, {
        value: '班级3',
        label: '2019级S班'
      }],
      classValue: '',

      typeOptions: [{
        value: '资源1',
        label: '学习资源'
      }, {
        value: '资源2',
        label: '教学大纲'
      }, {
        value: '资源3',
        label: '教学计划'
      }],
      typeValue: '',

      publishForm: {
        title: ''
      }
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
  background-color: dodgerblue;
  float: right;
}

#cancel {
  color: dodgerblue;
  background-color: white;
  float: right;
}
</style>
