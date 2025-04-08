import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-website": true,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const method = response.config.method;

    if (method?.toLowerCase() === "post") {
      if (response.data?.status === "SUCCESS") {
        toast.success("Details submitted successfully");
      } else {
        toast.error("Failed to submit details");
      }

      return response;
    }

    return response;
  },
  (err) => {
    return err;
  }
);

export default axiosInstance;
