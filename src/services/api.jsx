import axios from "axios";

const api = axios.create({
  // Rota da API do backend
  baseURL: "http://paineldecustosback.azurewebsites.net",
});

export default api;
