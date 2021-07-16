<template>
  <div>
    <nav>
      <div class="nav-wrapper teal darken-2">
        <a href="#" class="brand-logo">Mobilender</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down waves-light">
          <li><router-link to="/home">Inicio</router-link></li>
          <li><router-link to="/users">Usuarios</router-link></li>
          <li v-on:click="onLogout"><i class="material-icons">exit_to_app</i></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    
  },
  data: function() {
    return {
      
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    onLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push( "/login" );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
