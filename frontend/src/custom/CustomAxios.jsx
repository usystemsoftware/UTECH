import axios from "axios";

const apiURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5002"
    : "https://staging.usystem.software";

export const CustomAxios = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
