<template>
  <div>
    <div class="row">
    </div>
    
    <div class="row">
      <div class="col s4 offset-s2">
        <h6>Consulta de usuarios</h6>
      </div>
      <div class="col s4 offset-s2">
        <!-- Modal Trigger -->
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Nuevo Registro</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Nuevo Usuario</h4>
            <div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s6">
                      <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model="name">
                      <label for="first_name">Nombre</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate" v-model="app">
                      <label for="last_name">Apellido</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" v-model="password">
                      <label for="password">Contraseña</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" v-model="email">
                      <label for="email">Correo</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat"
              v-on:click="saveUser"
              :disabled='isDisabled'
            >Enviar</a>
          </div>
        </div>
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
  data: function() {
    return {
      headers: ['id', 'correo', 'nombre', 'apellido', 'avatar'],
      name: '',
      app: '',
      password: '',
      email: '',
    }
  },
  props: {
    info: Array,
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    isDisabled(){
      return !(this.name && this.app && this.password && this.email);
    }
  },
  methods: { 
    search() {

    },
    openModal() {
      document.addEventListener('DOMContentLoaded', function() {
        var elem = document.querySelectorAll('.modal');
        var instance = M.Modal.getInstance(elem);
        instance.open();
      });
    },
    saveUser() {

    }
  },
  mounted() {
    this.$store.dispatch("getUsers", 1);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
