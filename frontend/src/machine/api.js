import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});


export async function sendChatMessage(message) {
  const token = localStorage.getItem("token");
  try {
    const response = await api.post(
      "/chatbot",
      { message },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}


export { api };
