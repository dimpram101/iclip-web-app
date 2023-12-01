import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = 'https://newsdata.io/api/1';

export default axios.create({
    baseURL: API_URL,
    params: {
        apiKey: API_KEY,
    }
})

