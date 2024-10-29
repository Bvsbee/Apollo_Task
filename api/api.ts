import axios from "axios";

const base = "http://localhost:3000";

const api = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
