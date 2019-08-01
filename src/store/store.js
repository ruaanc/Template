import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usrs: [],
        tk: ''
    },
    mutations: {
        adicionarUsuario(payload) {
            this.state.tk = payload
        }
    }
})