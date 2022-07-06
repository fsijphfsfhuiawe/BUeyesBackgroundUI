<template>
  <div class="home">
    <DashBoard></DashBoard>
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoard from "./DashView.vue";

export default {
  name: "HomeView",
  components: {
    DashBoard
},
};
</script>

<!-- 测试用 -->
<!-- <template>
  <div class="home">
    <Dash></Dash>
  </div>
</template>

<script>
// @ is an alias to /src
import Dash from "../components/Dash.vue";

export default {
  name: "HomeView",
  components: {
    Dash
},
};
</script> -->

