import axiosInstance from "./axios";

export const listCaseStudies = async () => {
  try {
    const res = await axiosInstance.get("/case-study");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
    return [];
  }
};
