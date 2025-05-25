import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://thinkboard-8md5.onrender.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
