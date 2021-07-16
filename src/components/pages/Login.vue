<template>
  <div>
    
    <div class="row">
      <div class="col s6 offset-s3">
        <h3>Login</h3>
        <form class="col s12">
          <div class="row">
            <div class="input-field">
              <input id="email" type="email" class="validate" v-model="username">
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input id="password" type="password" class="validate" v-model="password">
              <label for="password">Password</label>
            </div>
          </div>
        </form>
        <div class="col s6 offset-s3 center">
          <a 
            class="waves-effect waves-light btn  teal darken-2" 
            v-on:click="onSubmit"
            :disabled='isDisabled'
          >Ingresar</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
    
  },
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  props: {
  },
  computed: { 
    isDisabled(){
      return !(this.username && this.password);
    }
  },
  methods: {
  async onSubmit() {
    try {
      this.$store.dispatch("doLogin", this.username);
      this.$router.push('/dashboard')
    } catch (error) {
      console.error(error);
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
