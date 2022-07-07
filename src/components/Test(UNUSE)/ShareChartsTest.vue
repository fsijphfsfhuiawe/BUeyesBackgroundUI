<template>
    <div id="ShareChart" ref="ShareChart" :style="{width: '100%', height: '700px'}"></div>
</template>

<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

  export default({
    name:'ShareChart',
    setup(){
      onMounted(()=>{
        let ShareChart = echarts.init(document.getElementById('ShareChart'));
        ShareChart.setOption({
          title: {
                text: '各类新闻总数及总数变化走势',
                subtext: 'Fake Data'
          },
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          legend: {},
          grid: { top: '55%' },
          yAxis: { gridIndex: 0 },
          xAxis: { type: 'category' },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['娱乐', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
              ['体育', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
              ['国际', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
              ['新闻', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
            ]
          },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        });
        
        



        // 监听window窗口变化
        window.addEventListener('resize', () => {
          ShareChart.resize()
        })
    })
  },
})
</script>


