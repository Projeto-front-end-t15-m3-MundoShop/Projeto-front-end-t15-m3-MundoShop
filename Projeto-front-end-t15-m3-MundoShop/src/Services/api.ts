import axios from "axios";
//comentario
export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});
