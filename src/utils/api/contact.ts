import { TCreateContact } from "@/types";
import axiosInstance from "./axios";

export const addContact = async (body: TCreateContact) => {
  try {
    await axiosInstance.post("/contacts", body);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
