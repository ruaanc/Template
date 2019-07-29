<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.username }}</td>
                    <td>{{ usuario.email }}</td>
                    <button @click="alterarUser(usuario)">Editar</button>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script>
import barramento from '../barramento'
export default {
    props: {
        usuarios: Array,
        usuario: {}
    },
    methods: {
        alterarUser(usuario) {
            barramento.alterarUser(usuario)
        }
    }

}
</script>

<style scoped>
    .usuario-lista {
        flex: 4;
        display: flex;
        position: relative;
        margin: auto;
        display: table;
        background-color: white;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
        border-radius: 5px;
    }

    table {
        flex: 0;
        border-spacing: 0px;
        border-top: 1px solid #CCC;
    }


    th, td{
        padding: 15px 10px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    .usuario-lista td {
        padding: 15px 5px 10px;
        border-bottom: 1px solid #CCC
    }
</style>
