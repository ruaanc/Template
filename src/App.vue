<template>
  <body>
    <div id="app">
      <router-view />
    </div>
  </body>
</template>
<script>
import User from './services/usr'
export default {
  name: 'app',
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
  }
}
</script>

<style>
</style>
