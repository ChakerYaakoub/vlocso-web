import { useState } from "react";

export interface AddEditPhotoProps {
  // Add any additional props you need
}

export const useAddEditPhoto = (props: AddEditPhotoProps) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  return { images, setImages, handleImageUpload };
};
