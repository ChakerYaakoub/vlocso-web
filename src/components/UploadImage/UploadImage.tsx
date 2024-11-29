import React from "react";
import "./UploadImage.css";
import { useUploadImageVideo, UploadImageVideoProps } from "./useUploadImage";
import { FormHelperText } from "@mui/material";
import CameraSVG from "../SVG/CameraSVG";
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";
import Popup from "../Popup/Popup";
import DeleteIcon from "../SVG/DeleteIcon";
import CropImage from "../CropImage/CropImage";

const UploadImageVideo: React.FC<UploadImageVideoProps> = (props) => {
  const {
    // @ts-ignore
    fileName,
    filePreview,
    uploadInputRef,
    name,
    // @ts-ignore
    title,
    label,
    // error = false,
    // @ts-ignore
    required = false,
    disabled = false,
    readOnly = false,
    titleBottom,
    myText,
    id = "",
    type,
    heightFormHelperText = 1,
    ariaDescribedById = "",
    focused,
    helperText,
    acceptedFormats,
    showDeleteConfirmation,
    videoRef,
    popupEditRemove,
    placeholder,
    borderRadiusImage = "rounded-full",
    cameraPosition = { bottom: "1%", right: "9%" },
    aspect = 1,
    userDefault,
    loadingFile,
    newFileToCrop,
    handleClick,
    handleAfterCorp,
    handleCancelCorp,
    setConfirmDelete,
    setPopupEditRemove,
    handlePopupEditRemove,
    setShowDeleteConfirmation,
    onBlur,
    setFocused,
    handleFileChange,
    handleImageClick,
  } = useUploadImageVideo(props);

  return (
    <div className="TextFieldContainer">
      {/* <label className="mb-2.5 block font-medium   dark:text-white text-black">
        {title}
        {required && (
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
            style={{ color: "red" }}
          >
             *
          </span>
        )}
      </label>
      {props.maxFileSize && (
        <div>
          <FormHelperText
            // sx={{ color: props.errorText ? '#d32f2f' : 'inherit' }}
            sx={{ color: "inherit" }}
          >
            {type === "image" ? "Photo" : "Video"} must be less than
            <b className="text-yellow-500"> {props.maxFileSize}MB </b>
          </FormHelperText>
        </div>
      )} */}

      <div className="container w-full mx-auto items-center py-2 ">
        {/* //overflow-hidden */}
        <div className="max-w-sm mx-auto  rounded-lg  items-center">
          <div>
            {/* px-4 py-6 */}
            <div
              id="image-preview"
              // p-6
              className={`relative ${
                filePreview ? "border-2 border-transparent" : "   rounded-lg"
              }
              max-w-sm py-3  items-center mx-auto text-center`}
            >
              <input
                ref={uploadInputRef}
                type="file"
                id={id}
                // className="hidden"
                style={{
                  width: "0px",
                  height: "0px",
                  opacity: 0,
                  overflow: "hidden",
                  // position: 'absolute',
                  zIndex: -1,
                }}
                name={name}
                // error={error}
                readOnly={readOnly}
                // required={required}
                disabled={disabled}
                // i change this // maybe its wrong
                // defaultValue={props.value || ''}
                accept={acceptedFormats.join(",")}
                onChange={handleFileChange}
                onClick={handleClick}
                onFocus={() => {
                  setFocused(!focused);
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  if (onBlur) onBlur(e);

                  setFocused(!focused);
                }}
              />

              {filePreview ? (
                <>
                  {/* image or video */}
                  <div className={borderRadiusImage}>
                    <div className="  w-full">
                      <div className="h-60 mx-auto flex justify-center">
                        <div className="relative">
                          {type === "video" && (
                            <>
                              <video
                                autoPlay
                                ref={videoRef}
                                loop
                                muted
                                playsInline
                                className={`h-60 ${borderRadiusImage}  cursor-pointer`}
                                onClick={handlePopupEditRemove}
                                style={{
                                  objectFit: "fill",
                                  // width: '90%',
                                  aspectRatio: aspect,
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                                }}
                              >
                                <source
                                  src={
                                    filePreview ??
                                    URL.createObjectURL(filePreview)
                                  }
                                />
                                Your browser does not support the video tag.
                              </video>
                            </>
                          )}

                          {type === "image" && (
                            <>
                              <img
                                src={filePreview}
                                className={` h-60  ${borderRadiusImage}  cursor-pointer`}
                                alt="Image preview"
                                onClick={handlePopupEditRemove}
                                style={{
                                  objectFit: "fill",
                                  // width: '90%',
                                  aspectRatio: aspect,
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                                }}
                              />
                            </>
                          )}

                          {/* camera icon */}

                          <div
                            className="absolute  "
                            style={{
                              bottom: cameraPosition.bottom,
                              right: cameraPosition.right,
                            }}
                            onClick={handlePopupEditRemove}
                          >
                            {/* borderRadiusImage={borderRadiusImage}  */}
                            <CameraSVG />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-2  mt-4 text-xl font-bold tracking-tight text-gray-700">
                    {titleBottom ?? ""}
                  </h5>
                </>
              ) : (
                // @ts-ignore
                <>
                  <label htmlFor={id} className="">
                    <div className="relative  pt-6 pb-6  mx-auto h-60 ">
                      {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-700 mx-auto mb-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg> */}

                      <img
                        src={userDefault}
                        className={`  ${borderRadiusImage} m-auto  cursor-pointer`}
                        alt="Image preview"
                        // onClick={handlePopupEditRemove}
                        style={{
                          objectFit: "fill",
                          // width: '90%',
                          aspectRatio: aspect,
                          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                        }}
                      />

                      <div
                        className="absolute top-3 right-20 md:right-24"
                        style={{
                          padding: "5px",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          borderRadius: "50%",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>

                      {/* <p className="font-normal mx-3 text-sm text-gray-400 md:px-6">
                      Choose {type === "image" ? "photo" : "video"} size should
                      be less than{" "}
                      <b className="text-gray-600">{props.maxFileSize}mb</b>
                    </p>
                    <p className="font-normal mx-3  text-sm text-gray-400 md:px-6">
                      and should be in{" "}
                      <b className="text-gray-600">
                        {type === "image"
                          ? supportedFormatsImages
                              .map((format) => format.toUpperCase())
                              .join(", ")
                          : supportedFormatsVideos
                              .map((format) => format.toUpperCase())
                              .join(", ")}
               
                      </b>
                      {"  "}
                      format .
                    </p> */}

                      {/* <span
                      id="filename"
                      className="text-gray-500 bg-gray-200 z-50"
                    >
                      {fileName}
                    </span> */}
                    </div>
                  </label>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                    {titleBottom
                      ? titleBottom
                      : `Upload ${type === "image" ? "picture" : "Video"}`}
                  </h5>
                  <p>{placeholder ?? ""}</p>
                </>
              )}
              {/* <br />
              <br /> */}
              {/* helper text */}
              <br />

              {helperText && (
                <FormHelperText
                  sx={{
                    color: props.errorText
                      ? "#d32f2f"
                      : focused
                      ? "#1976d2"
                      : "inherit",

                    height: `${heightFormHelperText}rem`,
                    textAlign: "center",
                    fontWeight: props.errorText ? "bolder" : "normal",
                    // paddingLeft: '2rem',
                  }}
                  id={ariaDescribedById}
                  className="inheritColor"
                >
                  {myText}
                </FormHelperText>
              )}
              <br />
            </div>

            {/* corp image */}

            {newFileToCrop && (
              <CropImage
                image={URL.createObjectURL(newFileToCrop)}
                handleAfterCorp={handleAfterCorp}
                handleCancelCorp={handleCancelCorp}
                key={name}
                aspect={aspect}
                loading={loadingFile}
              />
            )}

            {/* delete confirmation */}

            <ConfirmationPopUp
              onClose={() => {
                setShowDeleteConfirmation(false), setPopupEditRemove(false);
              }}
              show={showDeleteConfirmation}
              icon={<DeleteIcon />}
              text={`Are you sure you want to delete this ${type}?`}
              cancelText="No, cancel"
              confirmText="Yes, I'm sure"
              colorConfirm="red"
              onConfirme={() => {
                setConfirmDelete(true), setShowDeleteConfirmation(false);
              }}
            />

            {/* popup edit remove */}

            <Popup
              show={popupEditRemove}
              onClose={() => setPopupEditRemove(false)}
              title={`Change ${label}`}
              actions={[
                {
                  label: `Upload   ${type === "image" ? "Photo" : "Video"}`,
                  onClick: handleImageClick,
                  sx: "text-blue-500 font-bold",
                },
                {
                  label: `Delete   ${type === "image" ? "Photo" : "Video"}`,
                  onClick: () => {
                    if (props.error) {
                      // delete directly without confirmation
                      setConfirmDelete(true), handlePopupEditRemove();
                    } else {
                      setShowDeleteConfirmation(true), handlePopupEditRemove();
                    }
                  },
                  sx: "text-red-500 font-bold",
                },
              ]}
            >
              <> </>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImageVideo;
