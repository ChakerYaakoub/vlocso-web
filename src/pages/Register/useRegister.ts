import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { textsInputsRegister } from "./textsInputsRegister";
import { handleRegister } from "./handleRegister";
import { User } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { LoginRegister } from "../../models/responses/LoginRegister";
import { registerUser } from "../../reducers/userReducer";

export interface FormValues extends User {
  confirmPassword: string;
}

export interface RegisterProps {}

const validationSchemaStep1 = Yup.object({
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
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const validationSchemaStep2 = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(30, "First Name must be at most 30 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(30, "Last Name must be at most 30 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(6, "Phone Number must be at least 10 characters")
    .max(15, "Phone Number must be at most 15 characters"),
  // country: Yup.string()
  //   .required("Country is required")
  //   .min(2, "Country must be at least 2 characters")
  //   .max(30, "Country must be at most 30 characters"),
  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(30, "City must be at most 30 characters"),
  birthDate: Yup.string()
    .required("Date of Birth is required")
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(19|20)\d{2}$/,
      "Date of Birth must be in the format MM/DD/YYYY"
    ),
});

export const useRegister = (props: RegisterProps) => {
  const [step, setStep] = useState(1);
  const [errorRegisterMsg, setErrorRegisterMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      // country: "",
      city: "",
      birthDate: "",
      // Add other initial values for step 2
    },
    validationSchema:
      step === 1 ? validationSchemaStep1 : validationSchemaStep2,

    enableReinitialize: true, // Allows the form to reinitialize when initialValues change
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

  // check finish the form step 1
  const GoToStep2 = () => {
    if (
      Object.keys(formik.errors).length === 0 &&
      formik.values.email !== "" &&
      formik.values.password !== "" &&
      formik.values.confirmPassword !== ""
    ) {
      setStep(2);
    } else if (formik.values.email === "") {
      const firstErrorElement = document.getElementById("email");
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    } else {
      const firstErrorField = Object.keys(formik.errors)[0];
      const firstErrorElement = document.getElementById(firstErrorField);
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  };

  // the last confirmation  to submit the form
  useEffect(() => {
    console.log("(formik.errors", formik.errors);
    if (confirmSubmit && Object.keys(formik.errors).length === 0) {
      setLoading(true);

      handleRegister(dispatch, formik.values)
        .then((result) => {
          if (result.success) {
            formik.resetForm();
            setSuccessMessage(result.message);
            setTimeout(() => {
              setSuccessMessage("");

              navigate("/profil");
            }, 50);
          } else {
            // Set error message from the result
            setErrorRegisterMsg(result.message); // Update error message
            // Clear error message after 5 seconds
            setTimeout(() => {
              setErrorRegisterMsg("");
            }, 5000);
          }
        })
        .catch((error) => {
          // Handle unexpected errors
          setErrorRegisterMsg(error.message); // Update error message
          // Clear error message after 5 seconds
          setTimeout(() => {
            setErrorRegisterMsg("");
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
    errorRegisterMsg,
    formik,
    step,
    successMessage,
    showConfirmPassword,
    showPassword,
    textsInputsRegister,
    GoToStep2,
    setStep,
    toggleConfirmPasswordVisibility,
    togglePasswordVisibility,
    setConfirmSubmit,
  };
};
