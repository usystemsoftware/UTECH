import axios from "axios";

const API_BASE = "http://localhost:5000/api/images";

export const fetchImages = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const uploadImage = async (file, client, platform) => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("client", client);
  formData.append("platform", platform);

  const res = await axios.post(API_BASE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteImageApi = async (id) => {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
};
