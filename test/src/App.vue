<template>
  <div id="app">
    <Circle></Circle>

    <div id="nav" class="pb-38">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/details">Details</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Circle } from "vue-loading-spinner";

export default {
  name: "App",
  components: {
    Circle
  }
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
