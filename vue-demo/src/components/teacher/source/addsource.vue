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
          <el-button size="mini" icon="el-icon-upload" id="uploadbutton" @click="dialogAddFile=true">上传文件</el-button>

          <el-dialog :title="addName" :visible.sync="dialogAddFile" width="500px" style="padding:0;" @close="closeClick">
            <div>
              <el-upload
                ref='upload'
                style="width: 100%"
                accept="file/pdf"
                :action="uploadUrl"
                :on-remove="handleRemove"
                :on-change="handleChange"
                :data="uploadData"
                :file-list="filelist"
                :before-upload="handleBeforeUpload"
                :auto-upload="false">
                <el-button type="primary" size="mini" slot="trigger">选取文件</el-button>
<!--                <div slot="tip" class="el-upload_tip">仅支持上传单个文件</div>-->
              </el-upload>
              <el-button type="primary" size="mini" @click="submitUpload">上传到服务器</el-button>
            </div>
          </el-dialog>

          <p id="p">支持格式：.pdf，单个文件不超过20MB</p>
        </el-form-item>

        <el-form-item>
          <el-button id="cancel" type="primary" plain size="mini" @click="cancelClick">取消</el-button>
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
      dialogAddFile: false,
      uploadUrl: '',
      uploadData: {},
      filelist: [],
      filelist_temp: [], //仅为判断是否已经上传文件使用

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
      },

    }
  },

  methods: {
    cancelClick() {
      this.$router.push({
        path: '/teacher/source/other',
        query: {

        }
      })
    },
    // 附件上传前处理
    handleBeforeUpload(file,filelist) {
      //处理其他数据
      this.uploadData.create_user = ''
      this.uploadData.type = ''
    },
    // 附件移除
    handleRemove(file,filelist) {
      //this.filelist = filelist  //这种方式无法触发手动上传动作
      filelist.splice(0,1)
      this.file_list_temp = filelist
      this.$forceUpdate()
    },
    // 附件变更、上传成功，上传失败
    handleChange(file,filelist) {
      if(file.status === 'ready') {
        // 附件变更
        //this.filelist = filelist  //这种方式无法触发手动上传动作
        if(filelist.length > 1) {
          filelist.splice(0,1)
        }
        this.file_list_temp = filelist
        this.$forceUpdate()
      }else if(file.status === 'success') {
        this.$message({
          type: 'success',
          message: '上传附件成功！'
        })
      }else {
        this.$message({
          type: 'error',
          message: '上传附件失败，请重试！'
        })
      }
    },
    // 上传到服务器
    submitUpload() {
      // if(this.filelist.length > 0)   //
      if(this.filelist_temp.length > 0) {
        this.$refs.upload.submit()
      }else {
        this.$message({
          type: 'info',
          message: '请先上传附件！'
        })
      }
    },

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
