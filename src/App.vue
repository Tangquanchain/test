<template>
  <div id="app">
    <!--我們要呈現元件的地方-->
    <router-view> </router-view> <!-- HelloWorld.vue -->
  </div>
</template>


<script>

export default {
  name: "App",
};
</script>

<style lang="scss"> //啟用Sass功能
@import './assets/all';
</style>
