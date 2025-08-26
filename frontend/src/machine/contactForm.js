import { CustomAxios } from "@/custom/CustomAxios";

export async function contactFormApply(formData) {
  try {
    const res = await CustomAxios.post("/contact/form", formData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Something went wrong" };
  }
}
