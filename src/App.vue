<template>
  <body>
    <div id="app">
      <router-view />
    </div>
  </body>
</template>
<script>
import User from './services/usr'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
body {
  background-color: #a4eef3
}
</style>
