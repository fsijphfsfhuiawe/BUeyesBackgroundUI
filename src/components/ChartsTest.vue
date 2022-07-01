<template>
    <div id="myChart" ref="myRef" :style="{width: '300px', height: '300px'}"></div>
</template>



<script>
  import { getCurrentInstance, onMounted } from 'vue';
  import * as echarts from 'echarts';
// import func from 'vue-editor-bridge';


export default {
  name: 'Echarts',
  setup(){
    console.log("iiiiiiii");
    onMounted(()=>{
        console.log("iii");
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
        window.onresize = function(){
            myChart.resize();
        };
    })
  },

}
</script>