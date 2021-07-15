<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: { 
      type: String,
      default: '¡Bienvenido a Mobilender!',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
