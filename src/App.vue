<template>
  <div id="app">
    <router-link to="/test" tag="button" class="btn_test">TEST</router-link>
    <router-link to="/home" tag="button" class="btn_home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
