<template>
  <div>
    <div class="row"></div>
    <div class="row">
      <div class="col s4 offset-s2">
        <h6>Consulta de usuarios</h6>
      </div>
      <div class="col s4 offset-s2">
         <a class="btn-floating btn-small waves-effect waves-light red"
          v-on:click="openModal"
         ><i class="material-icons">add</i></a>
      </div>
    </div>

    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>

    <div class="row">
      <div class="col s10 offset-s1">
        <Table :headers="headers" :data="users"/>
      </div>
    </div>

  </div>
</template>

<script>
import M from 'materialize-css'
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
  },
  methods: { 
    search() {

    },
    openModal() {
      console.log('abriendo...')
      document.addEventListener('DOMContentLoaded', function() {
        var elem = document.querySelectorAll('.modal');
        console.log('abriendo...')
        var instance = M.Modal.getInstance(elem);
        instance.open();
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
