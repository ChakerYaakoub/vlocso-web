import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { textsInputsForgotPassword } from "./textsInputsForgotPassword";
import { handleForgotPassword } from "./handleForgotPassword";
import { useNavigate } from "react-router-dom";

export interface FormValues {
  email: string;
}

export interface ForgotPasswordProps { }

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

export const useForgotPassword = (props: ForgotPasswordProps) => {
  const [loading, setLoading] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMesssage, setErrorMesssage] = useState<string | null>(null); // New state for error message
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // New state for success message
  const emailText = textsInputsForgotPassword.email;
  const navigate = useNavigate();

  const submitForgotPassword = () => {
    setConfirmSubmit(true);
  };

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleForgotPassword(values)
        .then((result) => {
          if (result.success) {
            setSuccessMessage(result.message); // Set success message
            setTimeout(() => {
              navigate("/change-password");
              setSuccessMessage(null);
            }, 5000);
          } else {
            setErrorMesssage(result.message); // Set error message
            setTimeout(() => {
              navigate("/change-password");
              setErrorMesssage(null);
            }, 5000);
          }
        })
        .catch((error) => {
          setErrorMesssage(error.message);
          // Set error message
        })
        .finally(() => {
          setLoading(false);
          setConfirmSubmit(false);
          setTimeout(() => {
            setErrorMesssage(null);
          }, 5000);
        });
    },
  });

  // Add useEffect for handling confirmation submit
  useEffect(() => {
    if (confirmSubmit) {
      if (formik.values.email === "") {
        const firstErrorElement = document.getElementById("email");
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

      formik.handleSubmit(); // Trigger form submission
      setConfirmSubmit(false);
    }
  }, [confirmSubmit, formik.errors]);

  return {
    ...props,
    loading,
    emailText,
    formik,
    errorMesssage,
    successMessage,
    setConfirmSubmit,
    submitForgotPassword,
  }; // Return the messages
};
