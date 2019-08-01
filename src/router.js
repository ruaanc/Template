import Vue from 'vue'
import Router from 'vue-router'
import cadastro from './components/TelaCadastro.vue'
import login from './components/Login.vue'
import editar from './components/EditarUsuario.vue'
import listar from './components/ListaUsuarios.vue'
import tela from './components/TelaPrincipal.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: tela
    },{
        path: '/cadastro',
        component: cadastro
    },{
        path: '/login',
        component: login
    },{
        path: '/editar',
        component: editar
    },{
        path: '/listar',
        component: listar
    }]
})