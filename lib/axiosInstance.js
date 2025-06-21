import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://meta-droid-backedn.vercel.app/api/v1',

  baseURL: "http://localhost:8585/api/v1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
});

export default instance;
