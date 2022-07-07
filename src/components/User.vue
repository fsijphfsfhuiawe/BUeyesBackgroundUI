<template>
  <div>
        <el-row class="row">
          <!-- 当日/当周访问量：折线图（或者dash里的图也是可以的） -->
          <el-col :span="24" class="col">
            <div :style="{width:'100%', height: '200px'}"><LineChart></LineChart></div>
          </el-col>
        </el-row>
        <el-row class="row">
          <!-- 用户新增量：条形图；用户年龄、性别：饼状图 -->
          <el-col :span="13" class="col"><div :style="{width:'100%', height: '300px'}"><BarChart></BarChart></div></el-col>
          <el-col :span="1" ></el-col>
          <el-col :span="10">
          <div class="col" :style="{width:'100%', height: '300px'}"><DoughnutChart></DoughnutChart></div>
            <!-- <div><el-row class = "col"><DoughnutChart></DoughnutChart></el-row></div> -->
            <!-- <div><el-row class = "col"><DoughnutChart></DoughnutChart></el-row></div> -->
          </el-col>
        </el-row>
        <!-- 用户信箱管理：表单 -->
        <!-- <el-row class="row">
          
        </el-row> -->
      </div>
</template>

<script>
//引入
 import BarChart from '../components/User/BarChart.vue';
 import LineChart from '../components/Charts/LineChart.vue';
 import DoughnutChart from '../components/User/Doughnut.vue';
 import LineDistributionChart from '../components/Charts/LineDistributionChart.vue';

export default {
  name: "User",
  components:{
    BarChart,
    LineChart,
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







