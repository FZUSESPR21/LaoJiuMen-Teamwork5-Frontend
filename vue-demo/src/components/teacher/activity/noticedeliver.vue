<template>
  <el-card class="bcard">
    <div slot="header" class="clearfix">
      <span>发布通知</span>
    </div>
    <div class="text item">
      <div id="noticedeliver">
        <div id="noticehead"><p>通知内容</p></div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="班级">
              <el-select v-model="form.region" placeholder="请选择年份班级">
                <el-option label="2021年S班" value="year"></el-option>
                <el-option label="2020年S班" value="yearr"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="form.name" placeholder="请输入通知标题"></el-input>
            </el-form-item>

            <el-form-item label="内容">
              <el-input type="textarea" v-model="form.desc" placeholder="请输入通知内容"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit">发布通知</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
  </el-card>
</template>

<script>
  export default {
    name: "notivedeliver",
    data() {
      return {
        form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
#head{
  background-color: white;
  font-size: 20px;
  height: 100px;
}
#noticedeliver{
  margin-top:0%;

  /*border-style:solid;
  border-width:1px;
  border-color:gray;
  border-radius:20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
}
#noticehead{
  font-size:21px;
  margin-top:0.2%;
  margin-bottom:2%;
  margin-left:7.5%;
}
button{
  background-color: #4ab2ee;
  color:white;
}
</style>
