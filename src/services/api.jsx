import axios from "axios";

const api = axios.create({
  // Rota da API do backend
  baseURL: "http://localhost:4000",
});

export default api;
