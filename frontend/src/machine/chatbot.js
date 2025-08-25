import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5002"
      : "https://staging.usystem.software",
});

// Send a message to chatbot
export async function sendChatMessage(message) {
  try {
    const res = await api.post("/chatbot", { message });
    return res.data;
  } catch (err) {
    console.error("Error sending chat message:", err);
    throw err;
  }
}

// Send OTP to email
export async function sendOtp(email) {
  try {
    const res = await api.post("/auth/send-otp", { email });
    return res.data;
  } catch (err) {
    console.error("Error sending OTP:", err);
    throw err;
  }
}

// Verify OTP and get token
export async function verifyOtp(email, otp) {
  try {
    const res = await api.post("/auth/verify-otp", { email, otp });
    return res.data;
  } catch (err) {
    console.error("Error verifying OTP:", err);
    throw err;
  }
}

export { api };
