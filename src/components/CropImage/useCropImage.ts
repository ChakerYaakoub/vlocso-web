import { useState, useCallback } from "react";

import uuid from "react-uuid";

export interface CropImageProps {
  image?: string | undefined;
  handleAfterCorp: (croppedImage: File) => void;
  handleCancelCorp: () => void;
  aspect?: number | undefined;
  loading: boolean;
}
export const useCropImage = (props: CropImageProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any | null>(null);
  const [loadingGetCroppedImg, setLoadingGetCroppedImg] = useState(false);

  const onCropComplete = useCallback(
    // @ts-ignore
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleSave = async () => {
    if (!props.image || !croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(props.image, croppedAreaPixels);
      props.handleAfterCorp(croppedImage);
      setLoadingGetCroppedImg(false);
    } catch (error: any) {
      setLoadingGetCroppedImg(false);
      props.handleCancelCorp();
      console.error("Error 1 : cropping the image:", error);
      throw new Error("Error cropping the image ");
    }
  };

  const handleCancel = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    props.handleCancelCorp();
  };

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // Needed to avoid cross-origin issues
      image.src = url;
    });

  // const getRadianAngle = (degreeValue: number) => (degreeValue * Math.PI) / 180;

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: any
  ): Promise<File> => {
    setLoadingGetCroppedImg(true);
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context is not available");
      throw new Error("Error cropping the image  ");
    }

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise<File>((resolve) => {
      canvas.toBlob((file) => {
        if (file) {
          resolve(new File([file], `${uuid()}.jpeg`, { type: "image/jpeg" }));
        } else {
          console.error("Error 2 : cropping the image");
          throw new Error("Error cropping the image ");
        }
      }, "image/jpeg");
    });
  };
  return {
    ...props,
    crop,
    zoom,
    loadingGetCroppedImg,
    setCrop,
    setZoom,
    onCropComplete,
    handleSave,
    handleCancel,
  };
};
