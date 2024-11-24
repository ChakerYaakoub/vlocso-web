import React, { useRef, useState } from "react";
import "./UploadMultipleImages.css";
import { FormHelperText } from "@mui/material";
import CameraSVG from "../SVG/CameraSVG";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { MdDelete } from "react-icons/md";
import CropImage from "../CropImage/CropImage";
import { FaPlus } from "react-icons/fa";

interface UploadMultipleImagesProps {
  name: string;
  maxFileSize?: number; // in MB
  acceptedFormats?: string[];
  onChange: (files: File[]) => void;
  helperText?: string;
  text?: string | React.ReactNode;
}

const UploadMultipleImages: React.FC<UploadMultipleImagesProps> = ({
  name,
  maxFileSize,
  acceptedFormats = ["image/jpeg", "image/png", "image/gif"],
  onChange,
  helperText,
  text = "Add photos",
}) => {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);
  const [newFileToCrop, setNewFileToCrop] = useState<File | null>(null);
  const [loadingFile, setLoadingFile] = useState(false);
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles: File[] = [];

    files.forEach((file) => {
      if (
        acceptedFormats.includes(file.type) &&
        (!maxFileSize || file.size <= maxFileSize * 1024 * 1024)
      ) {
        validFiles.push(file);
        setNewFileToCrop(file); // Set the file to crop immediately
      }
    });

    event.target.value = ""; // Clear input after processing files
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = fileList.filter((_, i) => i !== index);
    const updatedPreviews = filePreviews.filter((_, i) => i !== index);
    setFileList(updatedFiles);
    setFilePreviews(updatedPreviews);
    onChange(updatedFiles);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const updatedPreviews = Array.from(filePreviews);
    const updatedFiles = Array.from(fileList);

    const [movedPreview] = updatedPreviews.splice(result.source.index, 1);
    const [movedFile] = updatedFiles.splice(result.source.index, 1);

    updatedPreviews.splice(result.destination.index, 0, movedPreview);
    updatedFiles.splice(result.destination.index, 0, movedFile);

    setFilePreviews(updatedPreviews);
    setFileList(updatedFiles);
    onChange(updatedFiles);
  };

  const handleCropImage = (croppedImage: File) => {
    setLoadingFile(true);
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setFilePreviews((prev) => [...prev, e.target!.result as string]);
        setFileList((prev) => [...prev, croppedImage]);
        onChange([...fileList, croppedImage]);
      }
      setLoadingFile(false);
    };

    reader.readAsDataURL(croppedImage);
    setNewFileToCrop(null); // Reset cropping state
  };

  // useEffect(() => {
  //   console.log("File Previews:", filePreviews);
  //   console.log("File List:", fileList);
  // }, [filePreviews, fileList]);

  return (
    <div className="mt-2">
      <input
        type="file"
        name={name}
        accept={acceptedFormats.join(",")}
        multiple
        onChange={handleFileChange}
        ref={uploadInputRef}
        style={{ display: "none" }}
      />

      <div className="flex items-center justify-center mb-2">
        <button
          onClick={() => uploadInputRef.current?.click()}
          type="button"
          className="bg-gray-600 p-2 rounded-full flex items-center justify-center relative"
        >
          <FaPlus className="absolute top-3 right-2 text-white" size={10} />
          <CameraSVG />
        </button>
      </div>
      {text}

      <div className="flex flex-col gap-2 pt-2 mt-2 border-t-2 border-gray-200">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="image-preview-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filePreviews.map((preview, index) => (
                  <Draggable
                    key={index}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="image-preview relative"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img
                          src={preview}
                          alt={`Uploaded ${index}`}
                          className="w-full h-32 object-cover"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {filePreviews.length === 0 && (
          <p className="text-sm text-gray-500 text-center pt-5">
            No images uploaded yet
          </p>
        )}
      </div>
      {newFileToCrop && (
        <CropImage
          image={URL.createObjectURL(newFileToCrop)}
          handleAfterCorp={handleCropImage}
          handleCancelCorp={() => setNewFileToCrop(null)}
          loading={loadingFile}
        />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </div>
  );
};

export default UploadMultipleImages;
