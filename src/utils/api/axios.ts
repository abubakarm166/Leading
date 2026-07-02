import axios from "axios";
import { BASE_URL } from "../constants";
import { API_TIMEOUT_MS } from "./config";

if (process.env.NODE_ENV === "development" && !BASE_URL) {
  console.warn(
    "[Lending Bridge] API base URL is missing. Add NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_BASE_URL to .env.development or .env.local, then restart next dev.",
  );
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    "x-website": true,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const method = response.config.method;

    if (method?.toLowerCase() === "post" && typeof window !== "undefined") {
      void import("react-hot-toast").then(({ default: toast }) => {
        if (response.data?.status === "SUCCESS") {
          toast.success("Details submitted successfully");
        } else {
          toast.error("Failed to submit details");
        }
      });
    }

    return response;
  },
  (err) => Promise.reject(err),
);

export default axiosInstance;
