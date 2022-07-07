<template>
    <div id="LineTest" ref="LineTest" :style="{width: '100%', height: '400px'}"></div>
</template>

<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

  export default({
    name:'LineTest',
    setup(){
      onMounted(()=>{
        let LineTest = echarts.init(document.getElementById('LineTest'));
        LineTest.setOption({
          title: {
                text: '用户一周访问量',
                subtext: 'Fake Data'
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
          LineTest.resize()
        })
    })
  },
})
</script>