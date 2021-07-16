<template>
  <div>
    <div class="row"></div>
    <div class="row">
      <div class="">
        <h4>Página no encontrada 404</h4>
        <a class="waves-effect waves-light btn" v-on:click="back">regresar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
  back() {
    this.$router.push( "/login" );
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
