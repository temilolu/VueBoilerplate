<template>
  <div id="app">
    <div id="nav" class="pb-38">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/details">Details</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
