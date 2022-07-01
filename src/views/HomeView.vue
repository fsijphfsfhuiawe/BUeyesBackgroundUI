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
