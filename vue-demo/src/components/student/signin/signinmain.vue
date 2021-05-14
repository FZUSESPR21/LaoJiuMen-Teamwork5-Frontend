<template>
  <div>
    <div id="head">课程签到
        <p class="english">Signin</p>
    </div>
		<div id="div1">
			
				<div class="part">
				  <el-table
					  :data="tableData"
					  stripe
					  :row-style="{height:'64px'}"
					  :cell-style="{padding:'0px'}"
					  style="width: 100%">
					  
					  <el-table-column  v-for="(item,i) in tablecol"
						:key="i"
						:prop="item.prop"
						:label="item.label"
						:width="item.width"
						height="57">
					  </el-table-column>
					 
					  <el-table-column label="签到结果"  align="center" width="120">
							  <template slot-scope="scope">
					  <!--          <router-link to="/student/activity/homeworkdetail" tag="button" >查看</router-link>-->
					  
							   <!-- <el-button type='text' @click="signClick(scope.row)" id="clickbutton">
									<span v-if="show">点击签到</span>
								</el-button> -->
								<el-button type='text' @click="aClick(scope.row)" >
									<span v-if="scope.row.Checkinresults==0">点击签到</span>
								</el-button>
								
									<span v-show="scope.row.Checkinresults==1" disabled="">出勤</span>
								
								
							  </template>
							</el-table-column>
					  <!-- <el-table-column
						prop="Releasetime"
						label="发布时间"
						width="220"
						height="57">
					  </el-table-column>
					  
					  <el-table-column
						prop="Endtime"
						label="结束时间"
						width="220"
						height="57">
					  </el-table-column>
					  
					  <el-table-column
						prop="Checkintime"
						label="签到时间"
						width="220"
						height="57">
					  </el-table-column>
					  
					  <el-table-column
						prop="state"
						label="状态"
						width="167"
						height="57">
					  </el-table-column>
					  
					  <el-table-column
						prop="Checkinresults"
						label="签到结果"
						width="120"
						height="57">
					  </el-table-column>  -->
					
					</el-table>
			</div>
			
		</div>
  </div>
</template>

<script>


export default {
	name: "signinmain",
	
    data() {
      return {
		updateTime:'',
		
		show:'0',
		
		
		
		tablecol:[
		{prop:"Signname",label:"签到名称",width:"108px"},
		{prop:"Releasetime",label:"发布时间",width:"220"},
		{prop:"Endtime",label:"结束时间",width:"220"},
		{prop:"Checkintime",label:"签到时间",width:"220"},
		{prop:"state",label:"状态",width:"167"},
		
		],
		
        tableData: [{
			id:'1',		
          Signname:'1',
		  Releasetime:'2021-2-14 14:20',
		  Endtime:'2021-2-14 14:20',
		  Checkintime:'2021-2-14 14:20',
		  state:'已结束',
		  Checkinresults:'0',
        }]
		
      }
    },
	
	created() {
		let delOneMessage = {
			// id
			// Checkinresults
		}
		this.$axios({
		        method: 'get',
		        headers: {
		          'Content-type': 'application/json;charset=UTF-8'
		        },
		       data: JSON.stringify(delOneMessage),
		        url: 'http://localhost:8081/coursewebsite_war_exploded/student/attendance/all?clazzId='+this.clazzvalue,
		      }).then((response) => {          //这里使用了ES6的语法
		        //console.log(JSON.stringify(response))       //请求成功返回的数据
		        console.log(response.data.data.list)
		        this.tableData = response.data.data.list
		      }).catch((error) => {
		        console.log(error)       //请求失败返回的数据
		      })

	},
	
	 
	methods:{
	//获取当前年月日
	    addDate(){
	      const nowDate = new Date();
	            const date = {
	                year: nowDate.getFullYear(),
	                month: nowDate.getMonth() + 1,
	                date: nowDate.getDate(),
	            }
	            const newmonth = date.month>10?date.month:'0'+date.month
	            const day = date.date>10?date.date:'0'+date.date
	            this.updateTime = date.year + '-' + newmonth + '-' + day
	    
	    },
		
		aClick(e){
			this.show=this.show===0?1:0;
			e.Checkinresults=1;
			let delOneMessage = {
				
			}
			this.$axios({
					method: 'get',
					headers: {
					  'Content-type': 'application/json;charset=UTF-8'
					},
				   data: JSON.stringify(delOneMessage),
					url: 'http://localhost:8081/coursewebsite_war_exploded/attendance/stuUpdata?attendeAt='+this.value1,
				  }).then((response) => {          //这里使用了ES6的语法
					//console.log(JSON.stringify(response))       //请求成功返回的数据
					console.log(response.data.data.list)
					this.tableData = response.data.data.list
				  }).catch((error) => {
					console.log(error)       //请求失败返回的数据
				  })
		},
		
		lookClick(e) {
		this.show=false
        this.name = e.name
        this.endDate = e.endDate
        this.$router.push({
          // path: '/student/activity/noticedetail',
          query: {
            userId: this.userID,
            name: this.name,
            endDate: this.endDate
          }
        })
        // this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
      },
	  
	  
	  
	  
	  
	  
	}

  }
</script>

<style scoped>
#head{
  font-size: 20px;
  height: 100px;
}
.english{
  color: rgb(179, 179, 179);
  margin-top: 0;
  font-size: 15px;
}

#div1{
	width: 3000px;
	margin-left: 0px;
    margin-top: 0px;
    text-align: center;
    background-color: rgba(245, 242, 242, 100);
}

.part{
   margin-top: 0px;
   background-color: rgb(228, 228, 228);
   margin-left: 0px;
}
</style>
