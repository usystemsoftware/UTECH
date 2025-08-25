import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5002"
      : "https://staging.usystem.software",
});

export async function jobApply(formData) {
  try {
    const res = await api.post("/jobs/apply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error applying for job:", err);
    throw err;
  }
}
