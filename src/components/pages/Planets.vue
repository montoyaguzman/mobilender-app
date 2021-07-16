<template>
  <div>
    <div class="row">
    </div>
    
    <div class="row">
      <div class="col s4 offset-s2">
        <h6>Consulta de planetas</h6>
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
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat"
              v-on:click="savePlanet"
              :disabled='isDisabled'
            >Enviar</a>
          </div>
        </div>
      </div>
    </div>
          
    <div class="row">
      <div class="col s10 offset-s1">
        <Table :headers="headers" :info="planets"/>
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
      headers: ['nombre', 'diametro', 'clima', 'poblacion'],
      name: '',
    }
  },
  props: {
    info: Array,
  },
  computed: {
    planets() {
      return this.$store.state.planets
    },
    isDisabled(){
      return !(this.name);
    }
  },
  methods: { 
    search() {

    },
    savePlanet() {

    },
    openModal() {
      document.addEventListener('DOMContentLoaded', function() {
        var elem = document.querySelectorAll('.modal');
        var instance = M.Modal.getInstance(elem);
        instance.open();
      });
    },
  },
  mounted() {
    this.$store.dispatch("getPlanets", 'planets');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
