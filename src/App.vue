<template>
  <body>
    <div id="app">
      <tela-cadastro :listar="listar"/>
      <lista-usuarios :usuarios="usuarios"/>
      <form>
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
      usuarios: []
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
    }
  }

}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
