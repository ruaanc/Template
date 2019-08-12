<template>
    <div id="principal">
        <tela-cadastro/>
        <lista-usuarios/>
    </div>
</template>

<script>
import ListaUsuarios from '../components/ListaUsuarios.vue'
import TelaCadastro from '../components/TelaCadastro.vue'
export default {
    components: {
        ListaUsuarios,
        TelaCadastro
    }
}
</script>

<style>

</style>
