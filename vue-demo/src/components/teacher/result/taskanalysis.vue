<template>
<div>
  <p class="helpform"></p>
    <el-form>
      <el-form-item label="作业">
        <el-select placeholder="请选择作业">
          <el-option label="作业1" value="hw1"></el-option>
          <el-option label="作业2" value="hw2"></el-option>
        </el-select>
        <el-button type="primary" @click="onAnalysis">分析</el-button>
      </el-form-item>
      <el-form-item label="班级" >
        <el-select placeholder="请选择年份班级">
        <el-option label="2021年S班" value="year"></el-option>
        <el-option label="2020年S班" value="yearr"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <taskechart></taskechart>
  
</div>
</template>

<script>
  import echarts from 'echarts'
import taskechart from './taskechart.vue'
  export default {
  components: { taskechart },
    name: 'taskanalysis',
    data() {
      return {}
    },
  }

</script>

<style scoped>
.helpform{
    margin-top: 5%;
}

</style>

