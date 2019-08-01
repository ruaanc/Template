<template>
    <div id="principal">
        <Login/>
        <tela-cadastro/>
        <lista-usuarios/>
    </div>
</template>

<script>
import ListaUsuarios from '../components/ListaUsuarios.vue'
import TelaCadastro from '../components/TelaCadastro.vue'
import Login from '../components/Login.vue'
export default {
    components: {
        ListaUsuarios,
        TelaCadastro,
        Login
    }
}
</script>

<style>

</style>
