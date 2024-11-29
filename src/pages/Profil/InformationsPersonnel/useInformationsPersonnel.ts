import { User } from "../../../models/User";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { handleUpdateInformationsPersonnel } from "./handleUpdateInformationsPersonnel";
import { refreshUserData } from "../../../reducers/userReducer";
import { useDispatch } from "react-redux";

export interface InformationsPersonnelProps {
  user: User;
}
export interface FormValuesInformationsPersonnel {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
  city: string;
  urlImageUser: string;
}

const validationSchemaInformationsPersonnel = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(30, "First Name must be at most 30 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(30, "Last Name must be at most 30 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  birthDate: Yup.string()
    .required("Date of Birth is required")
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(19|20)\d{2}$/,
      "Date of Birth must be in the format MM/DD/YYYY"
    ),
  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(30, "City must be at most 30 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(6, "Phone Number must be at least 10 characters")
    .max(15, "Phone Number must be at most 15 characters"),
  // country: Yup.string()
  //   .required("Country is required")
  //   .min(2, "Country must be at least 2 characters")
  //   .max(30, "Country must be at most 30 characters"),
});

export const useInformationsPersonnel = (props: InformationsPersonnelProps) => {
  const [errorRegisterMsg, setErrorRegisterMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataIsUpdated, setDataIsUpdated] = useState(false);

  const dispatch = useDispatch();
  const formik: FormikProps<FormValuesInformationsPersonnel> =
    useFormik<FormValuesInformationsPersonnel>({
      initialValues: {
        email: props.user.email,
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        phoneNumber: props.user.phoneNumber,
        city: props.user.city || "",
        urlImageUser: props.user.urlImageUser || "",
        birthDate: props.user.birthDate
          ? `${props.user.birthDate.split("-")[2]}/${
              props.user.birthDate.split("-")[1]
            }/${props.user.birthDate.split("-")[0]}`
          : "",
      },
      validationSchema: validationSchemaInformationsPersonnel,

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

  // useEffect to update the dataIsUpdated state when the informations personnel are updated
  useEffect(() => {
    if (
      formik.values.firstName !== props.user.firstName ||
      formik.values.lastName !== props.user.lastName ||
      formik.values.email !== props.user.email ||
      formik.values.phoneNumber !== props.user.phoneNumber ||
      formik.values.city !== props.user.city ||
      formik.values.birthDate !== props.user.birthDate
    ) {
      setDataIsUpdated(true);
    }
  }, [formik.values, props.user]);

  // the last confirmation  to submit the form
  useEffect(() => {
    if (
      confirmSubmit &&
      Object.keys(formik.errors).length === 0 &&
      dataIsUpdated
    ) {
      setLoading(true);
      handleUpdateInformationsPersonnel(
        formik.values,
        props.user.userId.toString()
      )
        .then((result) => {
          if (result.success) {
            console.log("props user", props.user.userId);
            // formik.resetForm();
            console.log("result update user", result);
            // @ts-ignore

            dispatch(refreshUserData(props.user.userId));
            setSuccessMessage(result.message);
            setDataIsUpdated(false);
            setTimeout(() => {
              setSuccessMessage("");

              // navigate("/profile");
            }, 2000);
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
    } else {
      setConfirmSubmit(false);
    }
  }, [confirmSubmit, formik.errors, dataIsUpdated]);
  return {
    ...props,
    formik,
    loading,
    errorRegisterMsg,
    successMessage,
    dataIsUpdated,
    setConfirmSubmit,
  };
};
