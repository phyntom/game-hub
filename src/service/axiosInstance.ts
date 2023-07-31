import axios from 'axios'

const API_KEY: string = import.meta.env.VITE_API_KEY

export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    timeout: 10000,
    params: {
        key: `${API_KEY}`,
    },
})
