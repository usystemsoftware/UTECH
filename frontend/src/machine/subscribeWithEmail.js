import { CustomAxios } from "@/custom/CustomAxios";

export async function subscribeEmail(email) {
  try {
    const response = await CustomAxios.post("/email/subscribe", { email });
    return response.data;
  } catch (err) {
    console.error("❌ Subscription API error:", err);
    throw err.response?.data || { message: "Something went wrong" };
  }
}
