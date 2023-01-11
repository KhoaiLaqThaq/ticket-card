import axios from 'axios';

const instance = axios.create({
    // in dev environment, we are using the baseURL like localhost:8001
    // baseURL: 'https://tinder-backend-expjs.herokuapp.com/'
    baseURL: 'http://localhost:8001'
})

export default instance;
