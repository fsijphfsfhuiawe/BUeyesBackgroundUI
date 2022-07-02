<template>
<div id="myChart" ref="myRef" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

export default {
  name: 'Echarts',
  setup(){
    onMounted(()=>{
        let myChart = echarts.init(document.getElementById('myChart'));
        myChart.setOption({
            title: { text: '太阳系八大行星的卫星数量' },
            tooltip: {},
            xAxis: {
                data: ["水星","金星","地球","火星","木星","土星","金王星","海王星"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [0, 0, 1, 2, 79, 82, 27, 14]
            }]
        });
        // window.onresize = function(){
        //     myChart.resize();
        // };

        // 监听window窗口变化
        window.addEventListener('resize', () => {
          myChart.resize()
        })
    })
  },

}
</script>