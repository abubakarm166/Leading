import { TCreateRegistration } from "@/types";
import axiosInstance from "./axios";

export const addRegistration = async (body: TCreateRegistration) => {
  try {
    await axiosInstance.post("/registration", body);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
