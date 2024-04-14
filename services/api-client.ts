import axios from "axios";

export const JOBS_API_URL = "https://5e1a934c31118200148f20cd.mockapi.io/jobs";

export const apiClient = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 5000,
  });
};
