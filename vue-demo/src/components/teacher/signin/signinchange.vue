<template>
  <div id="div1">
    
		<div id="div2" >
		
					
			
			<div id="div3" style="display: flex;align-items: center;">
				<span class="text">{{qiandaochar+":"}}</span>
				<span class="text">第{{resultname}}次签到</span>
				
				
				<span class="text" id='jshutime'>{{qiandaochar2+":"}}</span>
				
				<div class="block">
				    <span class="demonstration"></span>
				    <el-date-picker
				      v-model="value1"
				      type="datetime"
				      placeholder="修改日期时间">
				    </el-date-picker>
				  </div>
				  
				<el-button @click="publishClick(scope.row)" style="margin-right:15px;" id="realeasebutton">修改</el-button>
			</div>

			

				
		
		</div>	
		
	
		
</div>
</template>

<script>
export default {
  name: "signinchange",
	
	data() {
	    return {
			qiandaochar:'签到名称',
			
			
			qiandaochar2:'修改时间为',
			updateTime:'',
			resultname:this.$route.query.resultname,
			
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
				{prop:"Checkintime",label:"签到时间",width:"220"},
				{prop:"state",label:"状态",width:"167"},
				{prop:"Checkinresults",label:"签到结果",width:"120"}
			],
			
	      tableData: [{
	        Signname:'1',
			  Releasetime:'2021-2-14 14:20',
			  Endtime:'2021-2-14 14:20',
			  Checkintime:'2021-2-14 14:20',
			  state:'已结束',
			  Checkinresults:'出勤',
	      }, {
	       Signname:'1',
	       Releasetime:'2021-2-14 14:20',
	       Endtime:'2021-2-14 14:20',
	       Checkintime:'2021-2-14 14:20',
	       state:'已结束',
	       Checkinresults:'出勤',
	      }, {
	        Signname:'1',
	        Releasetime:'2021-2-14 14:20',
	        Endtime:'2021-2-14 14:20',
	        Checkintime:'2021-2-14 14:20',
	        state:'已结束',
	        Checkinresults:'出勤',
	      }, {
	        Signname:'1',
	        Releasetime:'2021-2-14 14:20',
	        Endtime:'2021-2-14 14:20',
	        Checkintime:'2021-2-14 14:20',
	        state:'已结束',
	        Checkinresults:'出勤',
	      },{
				Signname:'1',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			},{
				Signname:'1',
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
				Signname:'1',
				Releasetime:'2021-2-14 14:20',
				Endtime:'2021-2-14 14:20',
				Checkintime:'2021-2-14 14:20',
				state:'已结束',
				Checkinresults:'出勤',
			}]
			
	    }
	  },
		
		
		
		 
		methods:{
		
			publishClick() {
	       let info = {
	        nian:this.valueyear,			
			yue:this.valuemonth,
			ri:this.valueday,
			shi:this.valuehour,
			fen:this.valuemin,
			miao:this.values,
			
			id:this.resultname
	      }
	      this.$axios({
	        method: 'post',
	        headers: {
	          'Content-type': 'application/json;charset=UTF-8'
	        },
	        data: JSON.stringify(info),
	        url: 'http://localhost:8088/coursewebsite_war_exploded/attendance//updateTime',
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

#div1{
	width: 500px;
	margin-left: 0px;
    margin-top: 0px;
    
    background-color: rgba(245, 242, 242, 100);
}

#div2{
	width: 1080px;
    margin-top: 0px;
	margin-left: -38px;
    background-color: white;
    
	text-align: center;
    
}
#div3{
	
	margin-top: 0;
	display: flex;
	align-items: center;
	height: 48px;
	border: 1px solid #BBBBBB;
}



#jshutime{
	margin-left: 40px;
}
 .text {
    font-size: 16px;
	color: black;
	margin-left: 14px;
  }

  
</style>
