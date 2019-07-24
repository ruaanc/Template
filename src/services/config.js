import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://sevendaysproject.herokuapp.com/'
})


