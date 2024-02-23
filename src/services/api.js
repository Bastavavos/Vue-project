import axios from 'axios';

const api_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
export default api_url;