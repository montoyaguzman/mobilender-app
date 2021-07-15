<template>
  <div>
    <Login/>
    <Home/>
  </div>
</template>

<script>
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
export default {
  name: 'Main',
  components: {
    Login, Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
