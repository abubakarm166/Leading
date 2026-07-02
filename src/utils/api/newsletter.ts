import { INewsLetter } from "@/types";
import axiosInstance from "./axios";

export const addNewsletter = async (body: INewsLetter) => {
  try {
    await axiosInstance.post("/subscriptions", body);
  } catch (err) {
    console.error("[API] addNewsletter failed:", err);
  }
};
