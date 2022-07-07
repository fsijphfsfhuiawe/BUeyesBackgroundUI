<template>
  <!--所有东西放container里-->
  <el-container class="container" style="width:100%">
    <!--aside 左侧导航栏-->
    <Menu></Menu>
    
    <!--右部界面-->
    <el-container>
      <!--头部，里面有管理员头像和一个拓展图标-->
      <el-header style="text-align:right; font-size: 15px">
      <p>this is the head.</p>
      </el-header>
      
      <!--主体部分，放置各种图块或表格；需要划分Layout-->
        <!-- <el-row class="row">
          <el-col :span="24" class="col">
            <div :style="{width:'100%', height: '300px'}"><BarChart></BarChart></div>
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
     -->
      <Dash></Dash>
    </el-container>
  </el-container>
  
</template>

<script>
//引入
  import Menu from '../components/Menu.vue';
  import Dash from '../components/Dash.vue';
 
  export default {
    name: "DashBoard",
    components:{
      Menu,
      Dash,
    },
  };
</script>

<style lang="scss" scoped>

.container{
  width: 100%;
  min-height:900px;
  background-size: 100% 100%;
  background-color:rgb(255, 254, 214);
  margin:0;
  position:absolute;
}
</style>

