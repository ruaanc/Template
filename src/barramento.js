import Vue from 'vue'
export default new Vue({
    methods: {
        alterarUser(user) {
            this.$emit('usuarioMudou', user)
        },
        quandoUserAlterar(callback) {
            this.$on('usuarioMudou', callback)
        }
    }
})