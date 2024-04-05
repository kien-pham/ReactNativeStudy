import axios from "axios";

export const apiClient = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 5000,
  });
};
