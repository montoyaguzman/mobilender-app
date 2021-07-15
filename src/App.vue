<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
// materializeCss
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import M from 'materialize-css'
// mainComponent
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  mounted() {
    M.AutoInit();
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

</style>
