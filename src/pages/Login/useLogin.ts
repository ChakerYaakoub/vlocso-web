import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { textsInputsLogin } from "./textsInputsLogin";

import { handleLogin } from "./handleLogin";
import { useDispatch } from "react-redux";

export interface FormValues {
  email: string;
  password: string;
}

export interface LoginProps {}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/[0-9]/, "Password must have at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must have at least one special character"
    ),
});

export const useLogin = (props: LoginProps) => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorLoginMsg, setErrorLoginMsg] = useState(""); // State for error message
  const emailText = textsInputsLogin.email;
  const PasswordText = textsInputsLogin.password;
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Add dependency on pathname

  // Formik configuration
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true, // Allows the form to reinitialize when initialValues change
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    // validate before submit
    // @ts-ignore
    onSubmit: (values) => {
      // setShowConfirmation(true);
      // console.log('values', values);
      // i handle the submit in the useEffect !!!!!!!
    },
  });

  // the last confirmation  to submit the form
  useEffect(() => {
    if (confirmSubmit && Object.keys(formik.errors).length === 0) {
      setLoading(true);
      handleLogin(dispatch, formik.values)
        .then((result) => {
          console.log("result", result);
          if (result.success) {
            // formik.resetForm();
            window.location.href = "/profil";
          } else {
            // Set error message from the result
            setErrorLoginMsg(result.message); // Update error message
            // Clear error message after 5 seconds
            setTimeout(() => {
              setErrorLoginMsg("");
              // just for testing
              // navigate("/profil");
            }, 5000);
          }
        })
        .catch((error) => {
          // Handle unexpected errors
          setErrorLoginMsg(error.message); // Update error message
          // Clear error message after 5 seconds
          setTimeout(() => {
            setErrorLoginMsg("");
          }, 5000);
        })
        .finally(() => {
          setLoading(false);
          setConfirmSubmit(false);
        });
    }
  }, [confirmSubmit, formik.errors]);

  return {
    ...props,
    loading,
    errorLoginMsg,
    emailText,
    PasswordText,
    formik,
    setConfirmSubmit,
    showPassword,
    togglePasswordVisibility,
  };
};
