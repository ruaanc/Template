<template>
  <body>
    <div id="app">
      <tela-cadastro/>
      {{usuarios}}
    </div>
  </body>
</template>

<script>
import TelaCadastro from './components/TelaCadastro.vue'
import User from './services/usr'

export default {
  name: 'app',
  components: {
    TelaCadastro
  },
  data() {
    return{
      usuarios: null
    } 
  },
  mounted() {
      User.listar().then(response => {
        this.usuarios = response
      })
  }    
}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
