import axiosInstance from "./axios";

export const listFiles = async () => {
  try {
    const res = await axiosInstance.get("/files");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data ?? [];
    }
    return [];
  } catch (err) {
    console.error("[API] listFiles failed:", err);
    return [];
  }
};
