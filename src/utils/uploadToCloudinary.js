import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_unsigned_preset");
  formData.append("cloud_name", "your_cloud_name");

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
    formData
  );

  return res.data.secure_url;
};
