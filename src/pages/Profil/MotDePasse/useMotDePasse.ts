import { User } from "../../../models/User";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { handleChangePasswordProfile } from "./handleChangePasswordProfile";
import { textsInputsChangePasswordProfile } from "./textsInputsChangePassword";

export interface MotDePasseProps {
  user: User;
}
export interface FormValuesChangePasswordProfile {
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit comporter au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(
      /[a-z]/,
      "Le mot de passe doit contenir au moins une lettre minuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Le mot de passe doit contenir au moins un caractère spécial"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("La confirmation du mot de passe est requise"),
});

export const useMotDePasse = (props: MotDePasseProps) => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorChangePasswordMsg, setErrorChangePasswordMsg] = useState("");
  const [successChangePasswordMsg, setSuccessChangePasswordMsg] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleChangePassword = () => {
    setConfirmSubmit(true); // Trigger the confirmation to submit the form
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik: FormikProps<FormValuesChangePasswordProfile> =
    useFormik<FormValuesChangePasswordProfile>({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      //@ts-ignore
      onSubmit: async (values) => {
        // This will be handled in the useEffect
      },
    });

  // Handle confirmation to submit the form
  useEffect(() => {
    if (confirmSubmit) {
      if (formik.values.password === "") {
        const firstErrorElement = document.getElementById("password");
        if (firstErrorElement) {
          firstErrorElement.focus();
        }
        setConfirmSubmit(false);
        return;
      }

      if (Object.keys(formik.errors).length > 0) {
        const firstErrorField = Object.keys(formik.errors)[0];
        const firstErrorElement = document.getElementById(firstErrorField);
        if (firstErrorElement) {
          firstErrorElement.focus();
        }
        setConfirmSubmit(false);
        return;
      }

      setLoading(true);
      handleChangePasswordProfile(formik.values.password, props.user.userId)
        .then((result) => {
          if (result.success) {
            formik.resetForm();
            // Handle success (e.g., navigate or show a success message)
            setErrorChangePasswordMsg("");
            setSuccessChangePasswordMsg(result.message);
          } else {
            setErrorChangePasswordMsg(result.message);
          }
        })
        .catch((error) => {
          setErrorChangePasswordMsg(error.message);
        })
        .finally(() => {
          setLoading(false);
          setConfirmSubmit(false);
          setTimeout(() => {
            setErrorChangePasswordMsg("");
            setSuccessChangePasswordMsg("");
          }, 3000);
        });
    }
  }, [confirmSubmit, formik.errors]);

  const PasswordText = textsInputsChangePasswordProfile.password;
  const ConfirmPasswordText = textsInputsChangePasswordProfile.confirmPassword;

  return {
    ...props,
    PasswordText,
    ConfirmPasswordText,
    formik,
    loading,
    showPassword,
    errorChangePasswordMsg,
    successChangePasswordMsg,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    setConfirmSubmit,
    handleChangePassword,
  };
};
