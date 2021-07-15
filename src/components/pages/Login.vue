<template>
  <div>
    
    <div class="row">
      <div class="col s6 offset-s3">
        <h3>Login</h3>
        <form class="col s12">
          <div class="row">
            <div class="input-field">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
        </form>
        <div class="col s6 offset-s3 center">
          <a class="waves-effect waves-light btn" v-on:click="onSubmit">button</a>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String
    },
    password: {
      type: String
    },
  },
  methods: {
  async onSubmit() {
    try {
      await this.$store.dispatch("doLogin", this.username);
      this.$router.push({ name: "Dashboard" });
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
