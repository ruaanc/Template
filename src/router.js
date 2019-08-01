import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import cadastro from './components/TelaCadastro.vue'
import login from './components/Login.vue'
import editar from './components/EditarUsuario.vue'
import listar from './components/ListaUsuarios.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: App
    },{
        path: '/cadastro',
        component: cadastro
    },{
        path: 'login',
        component: login
    },{
        path: '/editar',
        component: editar
    },{
        path: '/listar',
        component: listar
    }]
})