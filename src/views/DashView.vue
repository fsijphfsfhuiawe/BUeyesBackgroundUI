<template>
  <!--所有东西放container里-->
  <el-container class="container">
    <!--aside 左侧导航栏-->
    <el-aside width="200px" style="background-color:#4A2AC6; border-radius: 12px;">
      <!--侧边栏里的项目-->
      <el-scrollbar>
        <el-head class = "title" style="color:rgb(255, 254, 214);">
          <h2 style="margin-top:50px; margin-right:100px;margin-bottom: 50px; margin-left: 30px;">BUeyes</h2>
        </el-head>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><DataLine /></el-icon>
          <span class = "menutext"> 概览</span>
        </el-menu>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><Document /></el-icon>
          <span class = "menutext"> 新闻</span>
        </el-menu>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><Avatar /></el-icon>
          <span class = "menutext"> 用户</span>
        </el-menu>
        <el-footer>
          <!-- 夜间模式（待开发） -->
        </el-footer>
      </el-scrollbar>
    </el-aside>

    <!--右部界面-->
    <el-container>
      <!--头部，里面有管理员头像和一个拓展图标-->
      <el-header style="text-align:right; font-size: 15px">
      <p>this is the head.</p>
      </el-header>
      
      <!--主体部分，放置各种图块或表格；需要划分Layout-->
      <el-row class="row">
        <el-col :span="24" class="col">
          <div :style="{width:'100%', height: '300px'}"><BarChart></BarChart></div>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="12" class="col" >
          <div id="dom"><DoughnutChart></DoughnutChart></div>
        </el-col>
        <el-col :span="1" ></el-col>
        <el-col :span="11" class="col" >
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="14" class="col" ></el-col>
        <el-col :span="1" ></el-col>
        <el-col :span="9" class="col" ></el-col>
      </el-row>
    </el-container>
  </el-container>
  
</template>

<script>
//引入
import { 
  DataLine,
  Document,
  Avatar,
 } from '@element-plus/icons-vue'

 import BarChart from '../components/Charts/BarChart.vue';
 import DoughnutChart from '../components/Charts/Doughnut.vue';

export default {
  name: "DashBoard",
  components:{
    DataLine,
    Document,
    Avatar,
    BarChart,
    DoughnutChart,
  },
};
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-color:rgb(255, 254, 214);
  margin:0;
  position:absolute;
}
.title{
  text-align: left;
  margin:0px;
  font-size: large;
  height:120px;
}
.menu{
  background-color: #4A2AC6;
  letter-spacing: 10px;
  text-align: left;
  font-size: large;
  margin-block: 30px;
  margin-left: 34px;
}
.menutext{
  color: rgb(255, 254, 214);
}
.icon{
  color: rgb(255, 254, 214);
  font-size: 20px;
  margin-top: 5px;
  margin-right: 10px;
}

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