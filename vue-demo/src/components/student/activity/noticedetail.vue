<template>
	<div id="div1">
		<el-card class="box-card">
		  <div>
		    {{title}}
		  </div>
		  <div>
		    {{information}}
		  </div>
		  <div>
		    {{content}}
		  </div>
		</el-card>
		</div>
</template>

<script>
export default {
  name: "noticedetail",
  data(){
	  return{
		  title:'《软件工程》',
		  
		  information:'软件工程2',
		  
		  content:'因疫情防控，本学期推迟开学，按照“停课不停学”的要求，在推迟开学期间，通过远程教学的方式，进行课程教学。基本思路：本课程远程教学是课堂教学的替代方案，即课程章节、讲授内容和课后作业均无变化，仅以远程教学的方式，替代原来的课堂教学，正式开学后，将恢复课堂教学。课程资源：每节课前（课程原定时间），会上传该节课的幻灯片，以及对应的教学视频（本人录制），本课程的远程教学，以观看教学视频的方式进行，课程进度将与原定开课计划保持一致。3、 课后作业：每节课前（课程原定时间），会上传该节课的作业，主要包括原课后作业，以及教学视频的随堂笔记，课后作业和随堂笔记要求手写完成，其照片于下节课前提交。'

		  
		  
	  }
  }
	
}
</script>

<style scoped>

  .box-card {
      width: 1180px;
	  height: 480px;
    }
</style>
