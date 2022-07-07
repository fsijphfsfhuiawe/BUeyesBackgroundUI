<template>
    <div id="BarChart" ref="BarChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<!-- 新闻 -->
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
            name: '推荐',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 200, 201, 100, 190, 120, 110]
          },
          {
            name: '热门',
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
            name: '国内',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 182, 91, 134, 90, 130, 110]
          },
          {
            name: '国际',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 130, 110]
          },
          {
            name: '社会',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 132, 101, 100, 190, 230, 210]
          },
          {
            name: '文娱',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 230, 210, 100, 132, 101, 110]
          },
          {
            name: '教育',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 200, 201, 100, 190, 120, 110]
          },
          {
            name: '生活',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 200, 132, 101, 190, 120, 110]
          },
          {
            name: '科技',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [110, 200, 81, 60, 100, 90, 110]
          },
          {
            name: '法治',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [50, 100, 101, 70, 90, 40, 70]
          }
        ]
        });
        window.addEventListener('resize', () => {
          BarChart.resize()
        })
    })
  },
})
</script>