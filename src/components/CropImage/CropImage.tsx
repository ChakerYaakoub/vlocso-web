import React from "react";
import "./CropImage.css";
import { useCropImage, CropImageProps } from "./useCropImage";
import PopupChildren from "../PopupChildren/PopupChildren";
import Cropper from "react-easy-crop";
import CustomButton from "../CustomButton/CustomButton";
import { ImCancelCircle } from "react-icons/im";

const CropImage: React.FC<CropImageProps> = (props) => {
  const {
    crop,
    aspect = 1,
    loading,
    loadingGetCroppedImg,
    zoom,
    image,
    onCropComplete,
    setCrop,
    setZoom,
    handleSave,
    handleCancel,
  } = useCropImage(props);

  return (
    <PopupChildren
      zIndex={99999}
      onClose={handleCancel}
      customClass=" w-11/12 md:w-1/2  "
    >
      <div
        className=" py-10 relative  rounded-sm z-99999  
       bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <div className="absolute top-2 right-2">
          {" "}
          <ImCancelCircle
            size={20}
            onClick={handleCancel}
            className="cursor-pointer"
          />
        </div>
        <div>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="flex md:justify-end justify-around pt-5 px-4 ">
          <CustomButton
            width={"md:mx-4 p-3 w-auto md:w-2/12"}
            // on click back
            disabled={loading || loadingGetCroppedImg}
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </CustomButton>

          <CustomButton
            width={"w-1/2 md:w-1/5  p-3"}
            onClick={handleSave}
            colorConfirm={"blue"}
            type="button"
            disabled={loading || loadingGetCroppedImg}
          >
            {loading || loadingGetCroppedImg ? "Loading..." : "Save"}
          </CustomButton>
        </div>
      </div>
    </PopupChildren>
  );
};

export default CropImage;
