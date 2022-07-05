<template>
    <div id="DoughnutChart" ref="DoughnutChart" :style="{width: '100%', height: '300px'}"></div>
</template>

<script>
  import { onMounted, } from 'vue';
  import * as echarts from 'echarts';

export default ({
    name:'DoughnutChart',
    setup() {
        onMounted(()=>{
        let DoughnutChart = echarts.init(document.getElementById('DoughnutChart'));
        DoughnutChart.setOption({
            title: { text: '当前新闻类别分布百分比' },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['30%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 3,
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: true,
                    fontSize: '20',
                    fontweight: 'bold',
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
                }
            ]
        });
        window.onresize = function(){
            if(DoughnutChart) DoughnutChart.resize();
        };
    })
    },
})
</script>
