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
    <UserView></UserView>
  </div>
</template>

<script>
// @ is an alias to /src
import UserView from "./UserView.vue";

export default {
  name: "HomeView",
  components: {
    UserView
},
};
</script> -->

