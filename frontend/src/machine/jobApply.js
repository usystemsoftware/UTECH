import { CustomAxios } from "@/custom/CustomAxios";

export async function jobApply(formData) {
  try {
    const res = await CustomAxios.post("/jobs/apply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Error applying for job:", err);
    throw err.response?.data || { message: "Something went wrong" };
  }
}
