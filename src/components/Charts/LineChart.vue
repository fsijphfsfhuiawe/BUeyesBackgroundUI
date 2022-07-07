<template>
    <div id="LineChart" ref="LineChart" :style="{width: '100%', height: '200px'}"></div>
</template>

<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

  export default({
    name:'LineChart',
    setup(){
      onMounted(()=>{
        let LineChart = echarts.init(document.getElementById('LineChart'));
        LineChart.setOption({
          title: {
                text: '用户一周访问量',
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series:[
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'line',
              symbol: 'triangle',
              symbolSize: 20,
              lineStyle: {
                color: '#5470C6',
                width: 4,
                type: 'dashed'
              },
              itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
              }
            }
          ]
        });
        // 监听window窗口变化
        window.addEventListener('resize', () => {
          LineChart.resize()
        })
    })
  },
})
</script>