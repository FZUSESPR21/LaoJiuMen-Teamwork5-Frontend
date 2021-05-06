<template>
  <div id="div1">
    <div>
      <span class="text">提交情况</span>
    </div>

    <br>

    <div>
      <div>
        <i class="el-icon-folder-opened"></i>
        <el-button type="primary" plain size="mini" class="button" @click="downloadClick" icon="el-icon-download">下载</el-button>
      </div>

      <br>

      <div>
        <el-input v-model="input1" rows="9" type="textarea" placeholder="回答的内容" resize="none" readonly></el-input>
      </div>

      <br>

      <div>
        <span id="span" class="text">评论</span>
        <el-input v-model="input2" rows="5" type="textarea" placeholder="评论内容" resize="none" readonly></el-input>
      </div>
    </div>

    <br>

    <div>
      <el-form :model="commentForm" :rules="rules" ref="commentForm" inline="true">
        <el-form-item prop="comment">
          <el-input v-model="commentForm.comment" type="textarea" placeholder="请输入评论" resize="none"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" plain size="mini" @click="publishClick('commentForm')" class="button">发表评论</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <el-form :model="markForm" :rules="rules" ref="markForm" inline="true">
        <el-form-item>
          <span class="text">评分：</span>
        </el-form-item>

        <el-form-item prop="mark">
          <el-input v-model.number="markForm.mark" type="number" placeholder="请输入分数" resize="none"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" plain size="mini" @click="submitClick('markForm')" class="button">提交评分</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "submittedhomeworkdetail",
  data() {


    return {
      input1: '',
      input2: '',
      commentForm: {
        comment: '',
      },
      markForm: {
        mark: ''
      },


    }
  },
  methods: {
    downloadClick() {

    },
    publishClick() {

    },
    submitClick(formName) {

    }

  },

}
</script>

<style scoped>
#div1 {
  background-color: white;
}

.button {
  color: white;
  background-color: dodgerblue;
}

#span {
  font-size: 15px;
}

.text {
  font-weight: bold;
}
</style>
