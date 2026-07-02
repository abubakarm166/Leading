import axiosInstance from "./axios";

export const listCaseStudies = async () => {
  try {
    const res = await axiosInstance.get("/case-study");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data ?? [];
    }
    return [];
  } catch (err) {
    console.error("[API] listCaseStudies failed:", err);
    return [];
  }
};

export const getCaseStudy = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/case-study/${slug}`)

    if (res.data?.status === 'SUCCESS') {
      return res.data?.data;
    }

  } catch (err) {
    console.error("[API] getCaseStudy failed:", err);
    return null;
  }
};