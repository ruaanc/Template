<template>
  <div id="login">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Project</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Email" v-model="userLogin.email"></b-form-input>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Senha" type="password" v-model="userLogin.password"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Entrar</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    {{ userLogin.email }}
    {{ userLogin.password }}
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
      }
    };
  },
  methods: {
    login() {
      User.login(this.userLogin).then(res => {
        res.data = this.userLogin;
        this.dados = res.request.response;
        alert("Login realizado com sucesso");
      });
    }
  }
};
</script>

<style>
</style>
