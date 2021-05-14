<template>
<div>
  <div>
    <div id="main"></div>
  </div>
</div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'taskchart',
    
    data() {
      return {
        list: [],
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:''
    
      }
    },
    
    mounted: function() {
      // this.$nextTick(function() {
      //   this.getPie()
      // })
      this.initChart();
    },
    created () {
      this.initChart();
    },
    methods: {
      initChart() {
         this.char=echarts.init(document.getElementById("main"));
         this.char.setOption({
             tooltip:{},
             series:[
                 {
                     name: '访问来源',
                     type: 'pie',
                     radius: '70%',
                     data: []
                 }
             ]
         });
         this.$axios.get('http://1.15.149.222:8080/coursewebsite/teacher/score/homework?hid=56&&cid=1')
             .then((res)=>{
                 console.log('访问后台');
                 // console.log(res.data);
                 var list = [{'name': '100', 'value':res.data.data.a}, 
                             {'name': '90-99', 'value':res.data.data.b},
                             {'name': '85-89', 'value':res.data.data.c}, 
                             {'name': '80-84', 'value':res.data.data.d},
                             {'name': '70-79', 'value':res.data.data.e}, 
                             {'name': '60-69', 'value':res.data.data.f},
                             {'name': '0-59', 'value':res.data.data.g} ,
                             {'name': '缺交', 'value':res.data.data.h},
                             {'name': '未评分', 'value':res.data.data.i} ];
                 console.log(list);  
                 this.char.setOption({
                     series:[
                         {
                             name: '访问来源',
                             type: 'pie',
                             radius: '70%',
                             data:list//赋值
                         }
                     ]
                 })
             });
     },

      
    },

    }

  

</script>

<style scoped>
#main{
  height:500px;
  width:90%;
  margin-top:5%;
}
</style>

