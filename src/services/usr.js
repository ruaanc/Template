import { http } from './config'

export default {
    listar:() => {
        return http.get('users')
    },

    save:(us) => {
        return http.post('users', us)
    }

}