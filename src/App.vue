<template>
  <body>
    <div id="app">
      <Login/>
      <tela-cadastro :listar="listar" :usuario="usuario" :limpar="limpar"/>
      <lista-usuarios :usuarios="usuarios" :usuario="usuario"/>
    </div>
  </body>
</template>

<script>
import TelaCadastro from './components/TelaCadastro.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'
import Login from './components/Login.vue'
import User from './services/usr'
import barramento from './barramento'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app',
  components: {
    TelaCadastro,
    ListaUsuarios,
    Login  
  },
  data() {
    return{
      usuarios: [],
      usuario: {
          id: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: ''
      }
    } 
  },
  mounted() {
    this.listar()
  },
  methods: {
    listar(){
        User.listar().then(response => {
          this.usuarios = response.data
        })
    },
    limpar(){
      this.usuario = {}
    }
  },
  created() {
    barramento.quandoUserAlterar(user => {
      this.usuario = user
    })
  }
}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
