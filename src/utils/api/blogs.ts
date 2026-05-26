import { TBlog } from "@/types";
import axiosInstance from "./axios";

export const listBlogs = async (): Promise<TBlog[]> => {
  try {
    const res = await axiosInstance.get("/blogs");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
    return [];
  } catch (err) {
    console.log("ERROR: ", err);
    return [];
  }
};

export const getAllBlogs = async (): Promise<TBlog[]> => {
  return listBlogs();
};

export const getBlog = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/blogs/${slug}`);

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
