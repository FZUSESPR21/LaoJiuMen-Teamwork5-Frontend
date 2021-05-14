<template>
  
  <div id="div1">
    
		<div id="div2">
			
							
				
				<div id="div3" style="display: flex;align-items: center;">
					<span class="text">{{qiandaochar+":"}}</span>
					<span class="text">{{name}}</span>
					
					<el-input placeholder="请输入签到名称" class="kuang" size="medium" v-model="input" clearable style="width:14% ">
					</el-input>
					<span class="text" id='jshutime'>{{qiandaochar2+":"}}</span>
					
					<div class="block">
					    <span class="demonstration"></span>
					    <el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="发布签到结束时间">
					    </el-date-picker>
					  </div>
					
					<el-button @click="releaseClick(scope.row)"  id="realeasebutton" >发布签到</el-button>						
				</div>

				

					
			
			
			<div class="part">
				<el-table
					:data="tableData"
					stripe
					style="width: 100%">
			
					<el-table-column  v-for="(item,i) in tablecol"
									  :key="i"
									  :prop="item.prop"
									  :label="item.label"
									  :width="item.width"
									  height="57">
					</el-table-column>
			
					<el-table-column label="签到结果" v-if="showOper" align="center" width="180">
							<template slot-scope="scope">
					<!--          <router-link to="/teacher/signin/signinlist" tag="button" >签到结果</router-link>-->
							  <el-button type='text' @click="lookClick(scope.row)" id="lookbutton">查看</el-button>
							</template>
						  </el-table-column>
					<el-table-column label="修改结束时间" v-if="showOper" align="center" width="170">
							<template slot-scope="scope">
					<!--          <router-link to="/teacher/signin/signinchange" tag="button" >修改结束时间</router-link>-->
							  <el-button @click="editClick(scope.row)" type="text" id="lookbutton">编辑</el-button>
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
  name: "signinlist",
	
	data() {
	    return {
			showOper:'true',
			//搜索框文字
			qiandaochar:'签到名称',
			qiandaocishu:'第x次签到',
			
			qiandaochar2:'结束时间',
			//时间
			updateTime:'',
			
			resultname:'',
			
			//搜索框
			input:'',						
			
			
			
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
			      value1: '',
			
			
			
			
			tablecol:[			
				{prop:"Signname",label:"签到名称",width:"108px"},
				{prop:"Releasetime",label:"发布时间",width:"220"},
				{prop:"Endtime",label:"结束时间",width:"220"},
				
				{prop:"state",label:"状态",width:"167"},
				
			],
			
	      tableData: [{
	        Signname:'1',
			  Releasetime:'2021-2-14 14:20',
			  Endtime:'2021-2-14 14:20',
			  Checkintime:'2021-2-14 14:20',
			  state:'已结束',
			  Checkinresults:'出勤',
	      }, {
	       Signname:'2',
	       Releasetime:'2021-2-14 14:20',
	       Endtime:'2021-2-14 14:20',
	       Checkintime:'2021-2-14 14:20',
	       state:'已结束',
	       Checkinresults:'出勤',
	      }, {
	        Signname:'3',
	        Releasetime:'2021-2-14 14:20',
	        Endtime:'2021-2-14 14:20',
	        Checkintime:'2021-2-14 14:20',
	        state:'已结束',
	        Checkinresults:'出勤',
	      }, {
	        Signname:'4',
	        Releasetime:'2021-2-14 14:20',
	        Endtime:'2021-2-14 14:20',
	        Checkintime:'2021-2-14 14:20',
	        state:'已结束',
	        Checkinresults:'出勤',
	      },{
				Signname:'5',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			},{
				Signname:'6',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			},{
				Signname:'7',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			},{
				Signname:'8',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			}]
			
		
			
			
	    };
		
		
	  },
		
		created() {
			let delOneMessage = {
				
			}
			this.$axios({
			        method: 'get',
			        headers: {
			          'Content-type': 'application/json;charset=UTF-8'
			        },
			       data: JSON.stringify(delOneMessage),
			        url: 'http://localhost:8081/coursewebsite_war_exploded/attendance/teacherAll?clazzId='+this.clazzvalue,
			      }).then((response) => {          //这里使用了ES6的语法
			        //console.log(JSON.stringify(response))       //请求成功返回的数据
			        console.log(response.data.data.list)
			        this.tableData = response.data.data.list
			      }).catch((error) => {
			        console.log(error)       //请求失败返回的数据
			      })
			
		},
		
		
		 
		methods:{
		
		lookClick(row) {
			this.resultname=row.Signname;
			this.$router.push({
			  path: '/teacher/signin/signindetail',
			  query: {
				resultname:this.resultname
			  }
			})
			// this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
      },
		editClick(row) {
				this.resultname=row.Signname
				this.$router.push({
				  path: '/teacher/signin/signinchange',
				  query: {
					resultname:this.resultname
				  }
				})
				// this.$router.push({name: '/student/activity/homeworkdetail', params: {userId: this.userID,name: this.name}})
			  },
	
	publishClick() {
	      let info = {
	        endAt:this.value1,
			// issuer:;
			// clazzId:;
			
			
	      }
	      this.$axios({
	        method: 'post',
	        headers: {
	          'Content-type': 'application/json;charset=UTF-8'
	        },
	        data: JSON.stringify(info),
	        url: 'http://localhost:8088/coursewebsite_war_exploded/attendance/release',
	      }).then((response) => {          //这里使用了ES6的语法
	        console.log(JSON.stringify(response))       //请求成功返回的数据
	        alert(JSON.stringify(response))
	      }).catch((error) => {
	        console.log(error)       //请求失败返回的数据
	      })
	    }
		
		},

}
		
	
	

</script>

<style scoped>

#div1{
	width: 2500px;
	margin-left: 0px;
    margin-top: 0px;
    
    background-color: rgba(245, 242, 242, 100);
}
 
#div2{
	width: %;
    margin-top: 0px;
	margin-left: -33px;
    background-color: white;
    
	text-align: center;
    
}
#div3{
	
	margin-top: 0;
	display: flex;
	align-items: center;
	height: 48px;
	width: 1060px;
	border: 1px solid rgba(187, 187, 187, 100);
}
#jshutime{
	margin-left: 40px;
}
 .text {
    font-size: 16px;
	color: black;
	margin-left: 14px;
  }

.kuang{
	height: 40px;
}
.part{
  margin-top: 0px;
  margin-left: 0px;
  background-color: rgb(228, 228, 228);
  
}
</style>
