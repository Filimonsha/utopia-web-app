import axios from 'axios';

const instance = axios.create({
    // TODO
    baseURL: 'http://localhost:8080',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
