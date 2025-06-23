import axios from "axios";

const instance = axios.create({
  baseURL: "https://wali-backend.vercel.app/api/v1",
  withCredentials: true,
});

export default instance;
