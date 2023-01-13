import axios from 'axios';

const instance = axios.create({
    // in dev environment, we are using the baseURL like localhost:8001
    baseURL: 'https://ichallenge.vercel.app/'
    // baseURL: 'http://localhost:3000'
})

export default instance;
