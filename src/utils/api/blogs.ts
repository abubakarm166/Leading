import axiosInstance from "./axios";

export const listBlogs = async () => {
  try {
    const res = await axiosInstance.get("/blogs");

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
    return [];
  }
};

export const getBlog = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/blogs/${id}`);

    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
