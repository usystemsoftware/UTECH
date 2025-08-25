import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5002"
      : "https://staging.usystem.software",
});

// Send booking data to backend
export async function bookingSlotes(formData) {
  try {
    const response = await api.post("/bookings/slote", formData);
    return response.data; // return backend response to frontend
  } catch (err) {
    console.error("bookingSlotes error:", err.response?.data || err.message);
    throw err.response?.data || { error: "Something went wrong" };
  }
}
