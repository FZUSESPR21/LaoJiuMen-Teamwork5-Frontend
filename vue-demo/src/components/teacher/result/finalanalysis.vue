<template>
<div>
  <p class="helpform"></p>
    <el-form>
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
  import taskechart from './finalechart.vue'
  export default {
  components: { taskechart },
    name: 'finalanalysis',
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

