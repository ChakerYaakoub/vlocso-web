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
}

const UploadMultipleImages: React.FC<UploadMultipleImagesProps> = ({
  // @ts-ignore
  name,
  maxFileSize,
  acceptedFormats = ["image/jpeg", "image/png", "image/gif"],
  onChange,
  helperText,
}) => {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
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

    // Clear the input after setting the file for cropping
    event.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
    onChange(
      filePreviews
        .filter((_, i) => i !== index)
        .map((preview) => new File([], preview))
    );
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(filePreviews);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFilePreviews(items);
    onChange(items.map((preview) => new File([], preview)));
  };

  const handleCropImage = (croppedImage: File) => {
    setLoadingFile(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setFilePreviews((prev) => [...prev, e.target!.result as string]);
        //@ts-ignore
        onChange([...filePreviews, croppedImage]);
      }
      setLoadingFile(false);
    };
    reader.readAsDataURL(croppedImage);
    setNewFileToCrop(null); // Reset cropping state
  };

  return (
    <div>
      <input
        type="file"
        accept={acceptedFormats.join(",")}
        multiple
        onChange={handleFileChange}
        ref={uploadInputRef}
        style={{
          width: "0px",
          height: "0px",
          opacity: 0,
          overflow: "hidden",
          // position: 'absolute',
          zIndex: -1,
        }}
      />
      <div className="flex items-center justify-center mb-2">
        <button
          onClick={() => uploadInputRef.current?.click()}
          className="bg-gray-600 p-2 rounded-full flex items-center justify-center relative"
        >
          <FaPlus className="absolute top-3 right-2 text-white" size={10} />
          <CameraSVG />
        </button>
      </div>

      <div className="flex flex-col gap-2">
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
                        className="image-preview"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img
                          src={preview}
                          alt={`Uploaded ${index}`}
                          className="w-full h-32 w-full object-cover"
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
