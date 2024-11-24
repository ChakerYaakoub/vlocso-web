import axios from "axios";
import { ImageUrl } from "../models/Annonce";

const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();

    // Append the file directly
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = (await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )) as { data: ImageUrl };

    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export { uploadImage };
