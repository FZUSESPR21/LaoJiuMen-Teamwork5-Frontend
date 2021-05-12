<template>
  <div id="div1">
    <div>
      <span id="span" class="text">发布作业</span>
    </div>

    <br>

    <div>
      <sapn class="text">作业内容</sapn>
    </div>

    <div id="divSelect">
      <span class="text">班级：</span>
      <el-select size="mini" v-model="value" placeholder="请选择班级">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <br>

    <div>
      <el-form :model="publishForm" :rules="rules" ref="publishForm">
        <el-form-item>
          <i class="el-icon-star-on"></i>
          <span class="text">标题</span>
          <el-input v-model="publishForm.title" placeholder="请输入作业标题" resize="none"></el-input>
        </el-form-item>

        <el-form-item>
          <i class="el-icon-star-on"></i>
          <span class="text">截止时间</span>
          <br>
          <el-date-picker
              v-model="date1"
              type="datetime"
              placeholder="选择截止时间"
              value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <i class="el-icon-star-on"></i>
          <span class="text">发布时间</span>
          <br>
          <el-date-picker
            v-model="date2"
            type="datetime"
            placeholder="选择发布时间"
            value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <i class="el-icon-star-on"></i>
          <span class="text">内容</span>
          <el-input v-model="publishForm.content" rows="4" type="textarea" placeholder="请输入作业内容" resize="none"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" plain size="mini" @click="publishClick" class="button" id="publishbutton">发布</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "publishhomework",
  data() {
    return {
      options: [{
        value: 1,
        label: '2021级S班'
      }, {
        value: 2,
        label: '2020级S班'
      }, {
        value: 3,
        label: '2019级S班'
      }],
      value: 3,

      publishForm: {
        title: '',
        content: ''
      },

      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      date1: '',
      date2: '',

    }
  },

  methods: {
    publishClick() {
      let info = {
        id:"",
        clazzId: this.value,
        title: this.publishForm.title,
        content: this.publishForm.content,
        startAt: this.date1,
        endAt: this.date2
      }
      this.$axios({
        method: 'post',
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(info),
        url: 'http://localhost:8088/coursewebsite_war_exploded/teacher/homework/add',
      }).then((response) => {          //这里使用了ES6的语法
        console.log(JSON.stringify(response))       //请求成功返回的数据
        alert(JSON.stringify(response))
      }).catch((error) => {
        console.log(error)       //请求失败返回的数据
      })
    }
  }
}
</script>

<style scoped>
#div1 {
  background-color: white;
  margin-top: 3%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #b3b1b1;
}

#span{
  background-color: gray;
  font-size: 15px;
}

#divSelect {
  float: right;
}

.button {
  color: white;
  background-color: #4ab2ee;
}

.text {
  font-weight: bold;
}

#publishbutton {
  float: right;
}
</style>
