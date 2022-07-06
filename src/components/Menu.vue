<template>
<div>
    <!--aside 左侧导航栏-->
    <el-affix :offset="0">
    <el-aside width="200px" style="background-color:#4A2AC6; border-radius: 12px; height: 100%; min-height: 900px;">
      <!--侧边栏里的项目-->
      <el-scrollbar>
        <el-head class = "title" style="color:rgb(255, 254, 214);">
          <h2 style="margin-top:50px; margin-right:100px;margin-bottom: 50px; margin-left: 30px;">BUeyes</h2>
        </el-head>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><DataLine /></el-icon>
          <span class = "menutext"><router-link to="../views/DashView.vue"> 概览 </router-link></span>
        </el-menu>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><Document /></el-icon>
          <span active-class = "menutext"><router-link to="../views/NewsView.vue"> 新闻 </router-link></span>
        </el-menu>
        <el-menu class = "menu" @click="ShowDashboard">
          <el-icon class="icon"><Avatar /></el-icon>
          <span active-class = "menutext"><router-link to="../views/UsersView.vue"> 用户 </router-link></span>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    </el-affix>

</div>
</template>

<script>
//引入
import { 
  DataLine,
  Document,
  Avatar,
 } from '@element-plus/icons-vue'


export default {
  name: "Menu",
  components:{
    DataLine,
    Document,
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
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

</style>
