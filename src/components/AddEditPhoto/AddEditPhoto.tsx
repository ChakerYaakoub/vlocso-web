import React, { useState } from "react";
import "./AddEditPhoto.css";
import { AddEditPhotoProps, useAddEditPhoto } from "./useAddEditPhoto";
import UploadMultipleImages from "../UploadMultipleImages/UploadMultipleImages";

const AddEditPhoto: React.FC<AddEditPhotoProps> = (props) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (files: File[]) => {
    setImages(files);
    console.log(files);
  };

  return (
    <div className="add-edit-photo-container">
      <div>
        <UploadMultipleImages
          name="images"
          maxFileSize={5} // Set max file size in MB
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default AddEditPhoto;
