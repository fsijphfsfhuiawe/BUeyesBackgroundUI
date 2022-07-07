<template>
    <div id="BarChart" ref="BarChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<!-- 用户 -->
<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

  export default({
    name:'BarChart',
    setup(){
      onMounted(()=>{
        let BarChart = echarts.init(document.getElementById('BarChart'));
        BarChart.setOption({
          title: {
                text: '当日用户新增数',
          },
          tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            name: '原数',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [20, 21, 25, 26, 29, 31, 33]
          },
          {
            name: '当日新增',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [1, 4, 1, 3, 2, 2, 3]
          },
          
        ]
        });
        window.addEventListener('resize', () => {
          BarChart.resize()
        })
    })
  },
})
</script>