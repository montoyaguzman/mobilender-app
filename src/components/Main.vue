<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/home">Inicio</router-link></li>
          <li><router-link to="/tabla1">Tabla 1</router-link></li>
          <li><router-link to="/tabla2">Tabla 2</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
