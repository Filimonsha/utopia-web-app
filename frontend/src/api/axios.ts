import axios from 'axios';

const instance = axios.create({
    // TODO
    baseURL: 'https://localhost:8080',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
