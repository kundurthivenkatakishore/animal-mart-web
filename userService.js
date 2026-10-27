import axiosInstance from "../config/axiosInstance";

export const sendOtp = async (phoneNumber, countryCode) => {
  try {
    const response = await axiosInstance.post("/v1/users/send-otp", {
      phoneNumber,
      countryCode,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const verifyOtp = async (phoneNumber, countryCode, otp) => {
  try {
    const response = await axiosInstance.post("/v1/users/verify-otp", {
      phoneNumber,
      countryCode,
      otp,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};
