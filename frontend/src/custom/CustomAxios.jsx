import axios from "axios";

export const CustomAxios = axios.create({
    baseURL: "http://staging.usystem.software",
    headers: {
        "Content-Type": "application/json",
    },
});





