<template>
  <div>
    {{ count }}
    <a class="waves-effect waves-light btn" v-on:click="add">button</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: { 
    add() {
      console.log('sumando')
      this.$store.commit('increment')
    }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
