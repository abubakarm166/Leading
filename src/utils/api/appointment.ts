import { TCreateAppointment } from "@/types";
import axiosInstance from "./axios";

export const addAppointment = async (body: TCreateAppointment) => {
  try {
    await axiosInstance.post("/appointments", body);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
