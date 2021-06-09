import axios from "axios";

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export default axiosInstance;
