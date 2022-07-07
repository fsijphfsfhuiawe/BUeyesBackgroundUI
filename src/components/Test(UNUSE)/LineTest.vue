<template>
  <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name:"LineChart",
  data() {
    return {
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"], //横坐标数据
      yData: [30, 132, 80, 134] //纵坐标数据，与横坐标对应
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: '异步数据加载示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: []
          }
        ]
      };

      // 异步加载数据
      $.get('data.json').done(function(data) {
        // 填入数据
        myChart.setOption({
          xAxis: {
            data: data.categories
          },
          series: [
            {
              // 根据名字对应到相应的系列
              name: '销量',
              data: data.data
            }
          ]
        });
      });
      
      const myChart = echarts.init(document.getElementById("mychart"));// 图标初始化
      myChart.setOption(option);// 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

