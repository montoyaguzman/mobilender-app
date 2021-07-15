<template>
  <div>
    <div class="row">
      <div class="col s4">
      <h3>Consulta de usuarios</h3>
      </div>
      <div class="col s10 offset-s1">
        <Table :headers="headers" :data="users"/>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '../common/table.vue'
export default {
  name: 'Users',
  components: {
    Table
  },
  props: {
    headers: Array,
    data: Array,
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.headers = ['id', 'correo', 'nombre', 'apellido', 'avatar',]
    this.$store.dispatch("getUsers");
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
