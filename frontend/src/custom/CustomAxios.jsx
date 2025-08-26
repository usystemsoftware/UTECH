import axios from "axios";

export const CustomAxios = axios.create({
    baseURL: "http://localhost:5002",
    headers: {
        "Content-Type": "application/json",
    },
});





