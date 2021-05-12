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
    name: 'taskanalysis',
    data() {
      return {}
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getPie()
      })
    },
    methods: {
      getPie() {
        // 绘制图表
        var myChart = echarts.init(document.getElementById('main'))
        // 指定图表的配置项和数据
        var option = {
          //标题
          title: {
            
            text: '学生成绩饼图',
            x: 'left' ,             //标题位置
            // textStyle: { //标题内容的样式
            //   color: '#000',
            //   fontStyle: 'normal',
            //   fontWeight: 100,
            //   fontSize: 16 //主题文字字体大小，默认为18px
            // },
          },
          // stillShowZeroSum: true,
          //鼠标划过时饼状图上显示的数据
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          //图例
          legend: {//图例  标注各种颜色代表的模块
            orient: 'vertical',//图例的显示方式  默认横向显示
            bottom: 0,//控制图例出现的距离  默认左上角
            left: 'left',//控制图例的位置
            // itemWidth: 16,//图例颜色块的宽度和高度
            // itemHeight: 12,
            textStyle: {//图例中文字的样式
              color: '#000',
              fontSize: 16
            },
            data: ['0-59', '60-69', '70-79', '80-84'
                  , '85-89', '90-99', '100']//图例上显示的饼图各模块上的名字
          },
          //饼图中各模块的颜色
          color: ['#FFF68F', '#FFE4E1', '#B4EEB4', '#B0C4DE'
                  , '#D8BFD8', '#BFEFFF', '#F4A460'],

        
          // 饼图数据
          series: {
            // name: 'bug分布',
            type: 'pie',             //echarts图的类型   pie代表饼图
            radius: '90%',           //饼图中饼状部分的大小所占整个父元素的百分比
            center: ['50%', '50%'],  //整个饼图在整个父元素中的位置
            // data:''               //饼图数据
            data: [                  //每个模块的名字和值
              { name: '0-59', value: 10 },
              { name: '60-69', value: 10},
              { name: '70-79', value: 10 },
              { name: '80-84', value: 15},
              { name: '85-89', value: 15 },
              { name: '90-99', value: 20},
              { name: '100', value: 20 }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                  // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                },
                labelLine: {
                  show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
                }
              }
            },
          }

        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }

  }

</script>

<style scoped>
#main{
  height:500px;
  width:90%;
  margin-top:5%;
}
</style>

