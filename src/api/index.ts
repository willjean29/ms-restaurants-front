import axios from "axios";

const api = axios.create({
  baseURL: "http://3.82.162.195:8000",
});

export default api;
