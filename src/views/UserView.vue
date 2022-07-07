<template>
  <!--所有东西放container里-->
  <el-container class="container" style="width:100%">
    <!--aside 左侧导航栏-->
    <Menu></Menu>
    
    <!--右部界面-->
    <el-container>
      <!--头部，里面有管理员头像和一个拓展图标-->
      <el-header style="text-align:right; font-size: 15px">
      <!-- <p>this is the head.</p> -->
      </el-header>

      <User></User>
    </el-container>
  </el-container>
  
</template>

<script>
//引入
 import Menu from '../components/Menu.vue';
 import User from '../components/User.vue';

export default {
  name: "UserView",
  components:{
    Menu,
    User,
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

