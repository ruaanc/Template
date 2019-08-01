<template>
  <body>
    <div id="app">
      <Login/>
      <tela-cadastro/>
      <lista-usuarios/>
      <Editar/>
    </div>
  </body>
</template>

<script>

import ListaUsuarios from './components/ListaUsuarios.vue'
import TelaCadastro from './components/TelaCadastro.vue'
import Login from './components/Login.vue'
import Editar from './components/EditarUsuario.vue'
import User from './services/usr'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app',
  components: {
    ListaUsuarios,
    TelaCadastro,
    Login,
    Editar
  },
  mounted() {
    this.listar()
  },
  methods: {
   async listar(){
        User.listar().then(response => {
          const usuarios = response.data
          for (let index = 0; index < usuarios.length; index++) {
            this.$store.state.usrs.push(usuarios[index])
          }
        })
    }
  },
  computed: {
    token() {
      return this.$store.state.token
    }
  }

}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
