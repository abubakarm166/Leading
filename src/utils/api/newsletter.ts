import { INewsLetter } from "@/types";
import axiosInstance from "./axios";

export const addNewsletter = async (body: INewsLetter) => {
  try {
    await axiosInstance.post("/subscriptions", body);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
