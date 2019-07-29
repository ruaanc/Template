import { http } from './config'

export default {
    listar:() => {
        return http.get('users')
    },

    save:(us) => {
        return http.post('users', us)
    },

    update:(us) => {
        return http.put('users', us)
    },

    login:(us) => {
        return http.post('sessions', us)
    }

}