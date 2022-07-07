<template>
  <div>
        <el-row class="row">
          <el-col :span="24" class="col">
            <div :style="{width:'100%', height: '600px'}"><BarChart></BarChart></div>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="10" class="col" >
            <div id="dom"><DoughnutChart></DoughnutChart></div>
          </el-col>
          <el-col :span="1" ></el-col>
          <el-col :span="13" class="col" >
            <div><LineDistributionChart></LineDistributionChart></div>
          </el-col>
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

 import Menu from '../components/Menu.vue';
 import ShareChart from '../components/Charts/ShareChart.vue';
 import DoughnutChart from '../components/Charts/Doughnut.vue';
 import LineDistributionChart from '../components/Charts/LineDistributionChart.vue';
//  import '@/util/animate.min.css';


export default {
  name: "News",
  components:{
    Menu,
    ShareChart,
    DoughnutChart,
    LineDistributionChart
  },
};
</script>








