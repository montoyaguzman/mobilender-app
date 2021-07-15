<template>
  <div>
    {{ count }}
    <a class="waves-effect waves-light btn" v-on:click="add">button</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Home',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted() {
    const api = 'https://pokeapi.co/api/v2/pokemon/ditto'
    axios.get(api).then((response) => {
    console.log(response.data)
  })
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
