import axiosInstance from "./axios";

export const listTeam = async () => {
  try {
    const res = await axiosInstance.get("/team");
    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
    return [];
  }
};

export const getTeamMemberAvailability = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/availability/${id}`);
    if (res.data?.status === "SUCCESS") {
      return res.data?.data;
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
