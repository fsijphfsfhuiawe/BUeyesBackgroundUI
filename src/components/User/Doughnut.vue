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
            title: { text: '用户年龄分布' },
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
                    { value: 5, name: '老年' },
                    { value: 12, name: '中年' },
                    { value: 18, name: '青年' },
                    { value: 8, name: '少年' },
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
