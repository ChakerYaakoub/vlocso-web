import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { handleImage } from "./handleImage";
import { useNavigate } from "react-router-dom";
import { User } from "../../../models/User";
import { useDispatch } from "react-redux";
import { logout } from "../../../reducers/userReducer";

export interface BordProps {
  user: User;
}
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

export interface FormValuesBord {
  urlImageUser?: string;
  firstName?: string;
  lastName?: string;
}

const validationSchema = Yup.object({
  urlImageUser: Yup.mixed()
    .nonNullable("Image is required")
    .test("fileFormat", "Only images are allowed", (value) => {
      if (value instanceof File) {
        const supportedFormatsArray = supportedFormatsImages;
        return supportedFormatsArray.includes(
          value.name.split(".").pop()!.toLowerCase()
        );
      }
      return true;
    })
    .test("fileSize", "Photo size must be less than 5MB", (value) => {
      if (value instanceof File) {
        return value.size <= 5 * 1024 * 1024; // 3MB
      }
      return true;
    }),
});

export const useBord = (props: BordProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [weHaveChanged, setWeHaveChanged] = useState(false);
  const dispatch = useDispatch();
  const formik: FormikProps<FormValuesBord> = useFormik<FormValuesBord>({
    initialValues: {
      urlImageUser: props.user.urlImageUser!,
      firstName: props.user.firstName,
      lastName: props.user.lastName,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // after change picture
  useEffect(() => {
    const updateImage = async () => {
      setIsLoading(true);
      console.log(formik.values);
      // TODO: send to backend
      await handleImage(formik.values)
        .then((response) => {
          console.log(response);
          setWeHaveChanged(true);
        })
        .catch((error) => {
          console.error("Error updating image:", error);
        })
        .finally(() => {
          setIsLoading(false);
          setWeHaveChanged(false);
        });
    };
    if (weHaveChanged) {
      updateImage(); // Call the async function
    }
  }, [weHaveChanged, formik.values.urlImageUser]);

  const onSave = () => {
    setWeHaveChanged(true);
  };

  const onNavigate = (path: string) => {
    navigate(path);
  };

  const onLogout = async () => {
    const result = await dispatch(logout() as any);
    if (result.payload) {
      window.location.href = "/login";
    }
  };

  return {
    ...props,
    formik,
    isLoading,
    weHaveChanged,
    onSave,
    onNavigate,
    onLogout,
  };
};
