import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/",
  withCredentials: true,
});

export const logout = async () => {
  const response = await api.get("/auth/logout");
  return response.data;
};
