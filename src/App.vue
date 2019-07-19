<template>
  <body>
    <div id="app">
      <tela-cadastro/>
    </div>
  </body>
</template>

<script>
import TelaCadastro from './components/TelaCadastro.vue'

export default {
  name: 'app',
  components: {
    TelaCadastro
  }
}
</script>

<style>
body {
  background-color: #a4eef3
}
</style>
