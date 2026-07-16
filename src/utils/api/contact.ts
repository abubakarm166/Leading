import { TCreateContact } from "@/types";
import axiosInstance from "./axios";

export const addContact = async (body: TCreateContact): Promise<boolean> => {
  try {
    await axiosInstance.post("/contacts", body);
    return true;
  } catch (err) {
    console.error("[API] addContact failed:", err);
    return false;
  }
};
