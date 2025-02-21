<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import router from "@/router/router";

export default {
  name: 'App',
  components: {
    navBar,
    router
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
