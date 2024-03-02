import axios from 'axios';

export const BASE_URL = 'http://localhost:8080'

const instance = axios.create({
    // TODO
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
