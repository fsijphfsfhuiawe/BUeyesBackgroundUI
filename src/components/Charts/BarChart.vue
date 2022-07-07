<template>
    <div id="BarChart" ref="BarChart" :style="{width: '100%', height: '100%'}"></div>
</template>

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
                text: '当日各类新闻新增数',
                subtext: 'Fake Data'
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
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
        });
        // window.onresize = function(){
        //     if(BarChart) BarChart.resize();
        // };

        // 监听window窗口变化
        window.addEventListener('resize', () => {
          BarChart.resize()
        })
    })
  },
})
</script>