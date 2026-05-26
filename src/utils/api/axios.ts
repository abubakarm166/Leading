import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

if (process.env.NODE_ENV === "development" && !BASE_URL) {
  console.warn(
    "[Lending Bridge] API base URL is missing. Add NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_BASE_URL to .env.development or .env.local, then restart next dev.",
  );
}

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
