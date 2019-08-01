<template>
  <div class="login">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Name Project</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form  @submit.prevent="login">
            <label>Email: </label>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Email" type="email" v-model="userLogin.email"></b-form-input>
            <label>Senha: </label>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Senha" type="password" v-model="userLogin.password"></b-form-input>
            <router-link :to="go"><b-button size="sm" class="my-2 my-sm-0" type="submit">Entrar</b-button></router-link>
            <a class="forgot" href="#">Esqueceu a senha ?</a>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import User from "../services/usr";
export default {
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      token: '',
      go:'/editar'
    };
  },
  methods: {
    async login() {
      const user = await User.login(this.userLogin);
      const { token } = user.data
      this.$store.state.tk = token
    },
  }
};
</script>

<style scoped>
.login label{
  padding-right: 5px;
  color: rgb(83, 82, 82);
}

.forgot {
  margin-left: 45%;
  color: rgb(83, 82, 82);
}

.login a {
  font-size: 0.8em;
}


</style>
