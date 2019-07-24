<template>
  <body>
    <div id="app">
      <tela-cadastro/>
      <lista-usuarios :usuarios="usuarios"/>
      <form @submit.prevent="save">
        <button>Enviar</button>
      </form>
      
    </div>
  </body>
</template>

<script>
import TelaCadastro from './components/TelaCadastro.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'
import User from './services/usr'

export default {
  name: 'app',
  components: {
    TelaCadastro,
    ListaUsuarios,  
  },
  data() {
    return{
      usuarios: [],
      usuario: {
        username: 'Raíssa',
        email: 'ruaissa.tec@gmail.com',
        password: '12345',
        password_confirmation: '12345'
      }
    } 
  },
  mounted() {
      User.listar().then(response => {
        this.usuarios = response.data
      })
  },

  methods: {
    save(){
      User.save(this.usuario).then(res => {
        res.data = this.usuario
        alert('Salvo co sucesso')
      })
    }
  }

}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
