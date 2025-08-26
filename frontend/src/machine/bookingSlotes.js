import { CustomAxios } from "@/custom/CustomAxios";

// Send booking data to backend
export async function bookingSlotes(formData) {
  try {
    const response = await CustomAxios.post("/bookings/slote", formData);
    return response.data; // return backend response to frontend
  } catch (err) {
    console.error("❌ bookingSlotes error:", err.response?.data || err.message);
    throw err.response?.data || { error: "Something went wrong" };
  }
}
