import { useState, useRef, useEffect } from "react";
import userDefault from "../../assets/defaultUserPhoto.png";
import { FormikProps } from "formik";
import imageCompression from "browser-image-compression";
// import { useAlert } from '../../customHooks/useAlertHook';
// import { AlertType, AlertVariant } from '../../models/AlertTypes';
export type OnSaveFunction = (fieldName: string) => Promise<void> | void;
export const supportedFormatsImages = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  // 'gif',
  "bmp",
  "tiff",
  "tif",
];

export const supportedFormatsVideos = ["mp4", "webm", "ogv"];
export interface UploadImageVideoProps {
  maxFileSize?: number; // in bytes
  title: string;
  type: "image" | "video";
  imageSrc?: string;
  name: string;
  label: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  errorText?: string;
  helperText?: string;
  afterFocus?: string;
  id?: string;
  titleBottom?: string;
  placeholder?: string;
  value?: string;
  heightFormHelperText?: number;
  formik: FormikProps<any>;
  ariaDescribedById?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Add onBlur type
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange type
  onSave: OnSaveFunction;
  borderRadiusImage?: string;
  cameraPosition?: { bottom: string; right: string };
  aspect?: number | undefined;
}
const acceptedImageFormats = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/bmp",
  "image/webp",
  "image/tiff",
  "image/tif",
];

const acceptedVideoFormats = ["video/mp4", "video/webm", "video/ogv"];

export const useUploadImageVideo = ({
  // maxFileSize = 2 * 1024 * 1024,
  type = "image",

  ...props
}: UploadImageVideoProps) => {
  const [fileName, setFileName] = useState<string>("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [lastUploadedFile, setLastUploadedFile] = useState<File | null>(null); // Track the last uploaded file
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);
  const [myText, setMyText] = useState(props.helperText);
  const acceptedFormats: string[] =
    type === "image" ? acceptedImageFormats : acceptedVideoFormats;

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [popupEditRemove, setPopupEditRemove] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [newFileToCrop, setNewFileToCrop] = useState<File | null>(null);
  const [loadingFile, setLoadingFile] = useState(false);

  // const { showAlert } = useAlert();

  useEffect(() => {
    if (type === "video" && filePreview !== null && videoRef.current) {
      videoRef.current.load();
    }
  }, [filePreview]);

  useEffect(() => {
    // if (props.value) {
    setFilePreview(props.value!);
    // }
  }, [props.value]);

  useEffect(() => {
    if (confirmDelete) {
      handleRemove();
      setConfirmDelete(false);
    }
  }, [confirmDelete]);

  useEffect(() => {
    if (props.errorText) {
      // console.log('props.errorText');
      setMyText(props.errorText);
    } else if (props.afterFocus && !props.errorText && filePreview !== null) {
      setMyText(props.afterFocus);
    } else {
      setMyText(props.helperText);
    }
  }, [
    props.errorText,
    myText,
    props.error,
    props.helperText,
    props.afterFocus,
    filePreview,
  ]);
  const handleAfterCorp = (croppedImage: File) => {
    setLoadingFile(true);
    setFileName(croppedImage.name);

    // Function to read file asynchronously
    const readFile = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          resolve(e.target?.result as string);
        };

        reader.onerror = () => {
          reject(new Error("File reading failed"));
        };

        reader.readAsDataURL(file);
      });
    };

    // Chain promises to ensure sequential execution
    props.formik
      .setFieldValue(props.name, croppedImage)
      .then(() => {
        // Update last uploaded file
        setLastUploadedFile(croppedImage);

        // Call onSave function
        props.onSave(props.name!);
      })
      .then(() => {
        // After the important operations, read the file and set preview
        return readFile(croppedImage);
      })
      .then((filePreview) => {
        setFilePreview(filePreview);
        setNewFileToCrop(null);
        setLoadingFile(false);
      })
      .catch((error) => {
        console.error("Error handling after crop:", error);
        handleCancel();
        setNewFileToCrop(null);
        setLoadingFile(false);
        throw new Error("Error handling after crop");
      });
  };

  const setNewFile = (file: File) => {
    setNewFileToCrop(file);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      let file = event.target.files?.[0];

      if (file) {
        if (!acceptedFormats.includes(file.type)) {
          // Handle invalid file format
          // alert('Invalid file format. Only JPG, PNG, and GIF are allowed.');
          // return;
          // @ts-ignore
          let formatFile: string = "";
          if (type === "image") {
            formatFile = supportedFormatsImages
              .map((format) => format.toUpperCase())
              .join(", ");
          } else {
            formatFile = supportedFormatsVideos
              .map((format) => format.toUpperCase())
              .join(", ");
          }

          // showAlert({
          //   type: AlertType.Warning,
          //   title: "Error! ",
          //   message: `Invalid file format. only  ${formatFile} are allowed.`,
          //   variant: AlertVariant.Filled,
          // });
          // handleCancel();
          return;
        }
        if (
          props.maxFileSize &&
          file.size > props.maxFileSize * 1024 * 1024 &&
          type === "image"
        ) {
          // Handle file size exceeding limit
          // handleCancel();
          // console.log(`File size exceeds the limit of ${props.maxFileSize}MB.`);
          // return;
          const options = {
            maxSizeMB: props.maxFileSize,
            // maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          file = await imageCompression(file, options);
        }

        if (type === "image") {
          // Set image file for cropping
          setNewFile(file);
          return;
        } else {
          // Handle other file types (like video)

          // Set file name in UI
          setFileName(file.name);

          // Set formik field value
          props.formik.setFieldValue(props.name, file);

          // Update last uploaded file
          setLastUploadedFile(file);

          // Call onSave function
          props.onSave(props.name!);

          // Read file and set preview
          const readFile = (file: File): Promise<string> => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                resolve(e.target?.result as string);
              };

              reader.onerror = () => {
                reject(new Error("File reading failed"));
              };

              reader.readAsDataURL(file);
            });
          };

          try {
            const filePreview = await readFile(file);
            setFilePreview(filePreview);
          } catch (error: any) {
            console.error("Error reading file:", error);
            handleCancel();
            throw new Error("Error reading file");
          }
        }
      } else if (event.target.value === "") {
        return;
      } else {
        // No file selected, handle cancel
        handleCancel();
      }
    } catch (error) {
      // alert
      // showAlert({
      //   type: AlertType.Error,
      //   title: "Error! ",
      //   message:
      //     "An error occurred while uploading the file. Please try again later.",
      //   variant: AlertVariant.Filled,
      // });
    }
  };

  const handleImageClick = () => {
    handlePopupEditRemove();
    if (uploadInputRef.current) {
      uploadInputRef.current.click();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    // if file value == lastUploadedFile       let file = event.target.files?.[0];
    // console.log('new value ', input.files?.[0].name);
    // console.log('last value', lastUploadedFile?.name);

    // if (input.files?.[0].name === lastUploadedFile?.name) {
    //   // handle change file

    // }
    input.value = "";
  };
  const handlePopupEditRemove = () => {
    setPopupEditRemove(!popupEditRemove);
  };

  const handleRemove = () => {
    setFileName("");
    setFilePreview(null);
    props.formik.setFieldValue(props.name, null); // Clear the field value in Formik
    props.onSave(props.name!);
  };

  const handleCancelCorp = () => {
    setNewFileToCrop(null);
  };

  const handleCancel = () => {
    // Remove the 'required' attribute from the file input
    if (uploadInputRef.current) {
      uploadInputRef.current.removeAttribute("required");
    }

    // Restore the last uploaded file if available
    if (lastUploadedFile) {
      setFileName(lastUploadedFile.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(lastUploadedFile);
      props.formik.setFieldValue(props.name, lastUploadedFile);
    } else {
      setFileName("");
      setFilePreview(null);
      props.formik.setFieldValue(props.name, null); // Clear the field value in Formik
    }
  };

  return {
    ...props,
    fileName,
    filePreview,
    uploadInputRef,
    userDefault,
    focused,
    myText,
    acceptedFormats,
    type,
    showDeleteConfirmation,
    popupEditRemove,
    videoRef,
    acceptedImageFormats,
    acceptedVideoFormats,
    supportedFormatsImages,
    supportedFormatsVideos,
    loadingFile,
    newFileToCrop,
    handleClick,
    handleAfterCorp,
    handleCancelCorp,
    handlePopupEditRemove,
    setPopupEditRemove,
    setConfirmDelete,
    setShowDeleteConfirmation,
    handleRemove,
    setFocused,
    handleFileChange,
    handleImageClick,
    handleCancel,
  };
};
