import { textsInputsCreateAnnonce } from "./textsInputsCreateAnnonce";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { handleCreateAnnonce } from "./handleCreateAnnonce";
import { CreateAnnonce, FormValuesCreateAnnonce } from "../../models/Annonce";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../reducers/userReducer";
import { carBrandsAndModels } from "../../utils/carBrandsAndModels";
import { motoBrandsAndModels } from "../../utils/motoBrandsAndModels";
export interface CreateAnnonceProps {}

const validationSchemaStep1 = Yup.object({
  title: Yup.string()
    .required("Le titre est requis")
    .min(2, "Le titre doit comporter au moins 2 caractères")
    .max(30, "Le titre doit comporter au maximum 30 caractères"),
  price: Yup.string()
    .required("Le prix est requis")
    .matches(
      /^(?!.*  )[0-9 ]+$/,
      "Le prix ne doit contenir que des chiffres et des espaces, et ne peut pas avoir d'espaces consécutifs"
    )
    .min(2, "Le prix doit comporter au moins 2 caractères")
    .max(30, "Le prix doit comporter au maximum 30 caractères"),
  type: Yup.string()
    .required("Le type est requis")
    .min(2, "Le type doit comporter au moins 2 caractères")
    .max(30, "Le type doit comporter au maximum 30 caractères"),
  transaction: Yup.string()
    .required("La transaction est requise")
    .min(2, "La transaction doit comporter au moins 2 caractères")
    .max(30, "La transaction doit comporter au maximum 30 caractères"),
  condition: Yup.string()
    .required("La condition est requise")
    .min(2, "La condition doit comporter au moins 2 caractères")
    .max(30, "La condition doit comporter au maximum 30 caractères"),
  quantity: Yup.number()
    .required("La quantité est requise")
    .min(1, "La quantité doit être au moins de 1")
    .max(100, "La quantité doit être au maximum de 100"),
});

const validationSchemaStep2 = Yup.object({
  city: Yup.string()
    .required("La ville est requise")
    .min(2, "La ville doit comporter au moins 2 caractères")
    .max(30, "La ville doit comporter au maximum 30 caractères"),
  mark: Yup.string()
    .required("La marque est requise")
    .min(2, "La marque doit comporter au moins 2 caractères")
    .max(30, "La marque doit comporter au maximum 30 caractères"),
  model: Yup.string()
    .required("Le modèle est requis")
    .min(2, "Le modèle doit comporter au moins 2 caractères")
    .max(30, "Le modèle doit comporter au maximum 30 caractères"),

  year: Yup.number()
    .required("L'année est requise")
    .min(1900, "L'année doit être au moins 1900")
    .max(2024, "L'année doit être au maximum 2024"),

  fuelType: Yup.string()
    .required("Le type de carburant est requis")
    .min(2, "Le type de carburant doit comporter au moins 2 caractères")
    .max(30, "Le type de carburant doit comporter au maximum 30 caractères"),
  gearbox: Yup.string()
    .required("La boîte de vitesses est requise")
    .min(2, "La boîte de vitesses doit comporter au moins 2 caractères")
    .max(30, "La boîte de vitesses doit comporter au maximum 30 caractères"),
  climatisation: Yup.string()
    .required("La climatisation est requise")
    .min(2, "La climatisation doit comporter au moins 2 caractères")
    .max(30, "La climatisation doit comporter au maximum 30 caractères"),
  klm_counter: Yup.string()
    .nonNullable("Le compteur kilométrique ne doit pas être vide")
    .min(2, "Le compteur kilométrique doit comporter au moins 2 caractères")
    .matches(
      /^(?!.*  )[0-9 ]+$/,
      "Le compteur kilométrique ne doit contenir que des chiffres et des espaces, et ne peut pas avoir d'espaces consécutifs"
    )
    .max(
      30,
      "Le compteur kilométrique doit comporter au maximum 30 caractères"
    ),
  phoneNumber: Yup.string()
    .nonNullable("Le numéro de téléphone ne doit pas être vide")
    .matches(
      /^(?!.*  )[0-9+ ]+$/,
      "Le numéro de téléphone ne doit contenir que des chiffres, des espaces et des signes plus, et ne peut pas avoir d'espaces consécutifs"
    )
    .min(2, "Le numéro de téléphone doit comporter au moins 2 caractères")
    .max(30, "Le numéro de téléphone doit comporter au maximum 30 caractères"),
});
const validationSchemaStep3 = Yup.object({
  description: Yup.string()
    .required("La description est requise")
    .min(2, "La description doit comporter au moins 2 caractères")
    .max(30, "La description doit comporter au maximum 30 caractères"),
});

const validationSchemaStep4 = Yup.object({
  images: Yup.array().of(Yup.string()).required("Les images sont requises"),
});

export const useCreateAnnonce = (props: CreateAnnonceProps) => {
  const [step, setStep] = useState(1);
  const [errorRegisterMsg, setErrorRegisterMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [markOptions, setMarkOptions] = useState<string[]>([]);
  const [modelOptions, setModelOptions] = useState<string[]>([]);

  // get the user id from redux

  const user = useSelector(selectUserData);

  const formik: FormikProps<FormValuesCreateAnnonce> =
    useFormik<FormValuesCreateAnnonce>({
      initialValues: {
        userId: user?.userId || 0,
        title: "",
        price: "",
        type: "",
        transaction: "",
        condition: "",
        quantity: 1,
        phoneNumber: "",
        model: "",
        city: "",
        mark: "",
        year: 0,
        gearbox: "",
        climatisation: "",
        fuelType: "",
        klm_counter: "",
        description: "",
        images: [],
      },
      validationSchema:
        step === 1
          ? validationSchemaStep1
          : step === 2
          ? validationSchemaStep2
          : step === 3
          ? validationSchemaStep3
          : validationSchemaStep4,

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

  // switch the type use carBrandsAndModels or motoBrandsAndModels  for the mark create options
  useEffect(() => {
    if (formik.values.type === "Voiture") {
      setMarkOptions(carBrandsAndModels.map((item) => item.brand));
    } else {
      setMarkOptions(motoBrandsAndModels.map((item) => item.brand));
    }
  }, [formik.values.type]);

  // switch mark ==>  model create options
  useEffect(() => {
    if (formik.values.mark) {
      setModelOptions(
        carBrandsAndModels
          .filter((item) => item.brand == formik.values.mark)
          .flatMap((item) => item.models)
      );
    } else {
      setModelOptions([]);
    }
  }, [formik.values.mark]);

  const focusOnFirstError = (formik: FormikProps<FormValuesCreateAnnonce>) => {
    const firstErrorElement = document.getElementById(
      Object.keys(formik.errors)[0]
    );

    if (firstErrorElement) {
      firstErrorElement.focus();
      return true;
    }
    return false;
  };

  const focusByElement = (element: string) => {
    const firstErrorElement = document.getElementById(element);
    if (firstErrorElement) {
      firstErrorElement.focus();
    }
  };
  // touched the first element of the formik
  // useEffect(() => {
  //   focusByElement("title");
  // }, []);

  //
  const changeStep = (step: number) => {
    switch (step) {
      case 1:
        if (
          Object.keys(formik.errors).length === 0 &&
          formik.values.userId !== 0 &&
          formik.values.title !== "" &&
          formik.values.price !== "" &&
          formik.values.type !== "" &&
          formik.values.transaction !== "" &&
          formik.values.condition !== "" &&
          formik.values.quantity !== 0
        ) {
          setStep(2);
        } else {
          console.log("Please fill out all required fields in Step 1.");

          const isTouched = focusOnFirstError(formik);
          if (!isTouched) {
            focusByElement("title");
          }
        }
        break;
      case 2:
        if (
          Object.keys(formik.errors).length === 0 &&
          formik.isValid &&
          formik.values.city !== "" &&
          formik.values.mark !== "" &&
          formik.values.year !== 0 &&
          formik.values.gearbox !== ""
        ) {
          setStep(3);
        } else {
          console.log("Please fill out all required fields in Step 2.");
          // validate the formik
          const isTouched = focusOnFirstError(formik);
          if (!isTouched) {
            focusByElement("city");
          }
        }
        break;
      case 3:
        if (
          Object.keys(formik.errors).length === 0 &&
          formik.isValid &&
          formik.values.description !== ""
        ) {
          setStep(4);
        } else {
          console.log("Please fill out the description in Step 3.");
          const isTouched = focusOnFirstError(formik);
          if (!isTouched) {
            focusByElement("description");
          }
        }
        break;
      case 4:
        setConfirmSubmit(true);
        break;
    }
  };

  // the last confirmation  to submit the form
  useEffect(() => {
    console.log("(formik.errors", formik.errors);
    if (confirmSubmit && Object.keys(formik.errors).length === 0) {
      setLoading(true);

      handleCreateAnnonce(formik.values)
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
    textsInputsCreateAnnonce,
    step,
    successMessage,
    formik,
    confirmSubmit,
    errorRegisterMsg,
    loading,
    markOptions,
    modelOptions,
    setStep,
    changeStep,
    setConfirmSubmit,
    setLoading,
    setErrorRegisterMsg,
    setSuccessMessage,
    navigate,
  };
};
