import axiosInstance from "./axios";

export const listFiles = async () => {
  try {
    const res = await axiosInstance.get("/files");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
