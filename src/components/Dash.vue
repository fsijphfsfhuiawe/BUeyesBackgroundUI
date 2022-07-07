<template>
  <div>
        <!-- 条形图，当日各类新闻新增数 -->
        <el-row class="row">
          <el-col :span="24" class="col">
            <div :style="{width:'100%', height: '300px'}"><BarChart></BarChart></div>
          </el-col>
        </el-row>
        <!-- 环形图，表示各类新闻占总数的比重 -->
        <!-- 折线条形分配图，表示一周内访问次数的统计图像，可以看到哪一天人比较多 -->
        <el-row class="row">
          <el-col :span="10" class="col" >
            <div id="dom"><DoughnutChart></DoughnutChart></div>
          </el-col>
          <el-col :span="1" ></el-col>
          <el-col :span="13" class="col" >
            <div><LineDistributionChart></LineDistributionChart></div>
          </el-col>
        <!-- 信箱板块 -->
        </el-row>
        <el-row class="row">
          <el-col :span="14" class="col" ></el-col>
          <el-col :span="1" ></el-col>
          <el-col :span="9" class="col" ></el-col>
        </el-row>
      </div>
</template>

<script>
//引入
 import BarChart from '../components/Charts/BarChart.vue';
 import DoughnutChart from '../components/Charts/Doughnut.vue';
 import LineDistributionChart from '../components/Charts/LineDistributionChart.vue';

export default {
  name: "Dash",
  components:{
    BarChart,
    DoughnutChart,
    LineDistributionChart
  },
};
</script>

<style lang="scss" scoped>
.row {
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-right: 30px;
}
.col {
  border-radius: 10px;
  min-height: 200px;
  background-color:rgba(255, 255, 255,0.3);
  box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;
}

</style>







