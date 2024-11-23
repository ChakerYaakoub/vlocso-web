import React from "react";
import "./InformationsPersonnel.css";
import {
  InformationsPersonnelProps,
  useInformationsPersonnel,
} from "./useInformationsPersonnel";
import { textsInputsInformationsPersonnel } from "./InformationsPersonnelTextInputs";
import ReusableTextField from "../../../components/ReusableTextField/ReusableTextField";
import {
  MdCalendarToday,
  MdEmail,
  MdLocationCity,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import CustomButton from "../../../components/CustomButton/CustomButton";

const InformationsPersonnel: React.FC<InformationsPersonnelProps> = (props) => {
  const {
    user,
    formik,
    loading,
    setConfirmSubmit,
    dataIsUpdated,
    errorRegisterMsg,
    successMessage,
  } = useInformationsPersonnel(props);
  return (
    <div className="m-3 md:m-7">
      {/* -------first name */}

      <form id="informations-personnel-form" className="flex flex-col gap-3">
        <ReusableTextField
          icon1={<MdPerson className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.firstName.title}
          placeholder={textsInputsInformationsPersonnel.firstName.placeholder}
          label={textsInputsInformationsPersonnel.firstName.label}
          id={textsInputsInformationsPersonnel.firstName.id}
          type={textsInputsInformationsPersonnel.firstName.type}
          name={textsInputsInformationsPersonnel.firstName.name}
          required={textsInputsInformationsPersonnel.firstName.required}
          helperText={textsInputsInformationsPersonnel.firstName.helperText}
          afterFocus={textsInputsInformationsPersonnel.firstName.afterFocus}
          errorText={formik.errors.firstName}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        />

        {/* -------last name */}

        <ReusableTextField
          icon1={<MdPerson className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.lastName.title}
          placeholder={textsInputsInformationsPersonnel.lastName.placeholder}
          label={textsInputsInformationsPersonnel.lastName.label}
          id={textsInputsInformationsPersonnel.lastName.id}
          type={textsInputsInformationsPersonnel.lastName.type}
          name={textsInputsInformationsPersonnel.lastName.name}
          required={textsInputsInformationsPersonnel.lastName.required}
          helperText={textsInputsInformationsPersonnel.lastName.helperText}
          afterFocus={textsInputsInformationsPersonnel.lastName.afterFocus}
          errorText={formik.errors.lastName}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        />
        {/* -------email */}

        <ReusableTextField
          icon1={<MdEmail className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.email.title}
          placeholder={textsInputsInformationsPersonnel.email.placeholder}
          label={textsInputsInformationsPersonnel.email.label}
          id={textsInputsInformationsPersonnel.email.id}
          type={textsInputsInformationsPersonnel.email.type}
          name={textsInputsInformationsPersonnel.email.name}
          required={textsInputsInformationsPersonnel.email.required}
          helperText={textsInputsInformationsPersonnel.email.helperText}
          afterFocus={textsInputsInformationsPersonnel.email.afterFocus}
          errorText={formik.errors.email}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />

        {/* ------- date of birth --------- */}
        <ReusableTextField
          icon1={<MdCalendarToday className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.birthDate.title}
          label={textsInputsInformationsPersonnel.birthDate.label}
          placeholder={textsInputsInformationsPersonnel.birthDate.placeholder}
          id={textsInputsInformationsPersonnel.birthDate.id}
          type="text"
          name={textsInputsInformationsPersonnel.birthDate.name}
          required={textsInputsInformationsPersonnel.birthDate.required}
          helperText={textsInputsInformationsPersonnel.birthDate.helperText}
          afterFocus={textsInputsInformationsPersonnel.birthDate.afterFocus}
          errorText={formik.errors.birthDate}
          onBlur={formik.handleBlur}
          value={formik.values.birthDate}
          onChange={(e) => {
            if (
              formik.values.birthDate &&
              formik.values.birthDate.length > e.target.value.length
            ) {
              if (e.target.value[e.target.value.length - 1] === "/") {
                formik.setFieldValue(
                  textsInputsInformationsPersonnel.birthDate.name,
                  e.target.value.slice(0, -1)
                );
                return;
              }
              formik.setFieldValue(
                textsInputsInformationsPersonnel.birthDate.name,
                e.target.value
              );
              return;
            }

            const value = e.target.value; // Get the current input value
            let formattedValue = "";

            // Remove non-digit characters and handle empty input
            const digitsOnly = value.replace(/\D/g, "");

            // Handle formatting based on the length of the input
            if (digitsOnly.length > 1) {
              formattedValue = `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(
                2,
                4
              )}`;
            } else {
              formattedValue = digitsOnly;
            }

            if (digitsOnly.length >= 4) {
              formattedValue += `/${digitsOnly.slice(4, 8)}`;
            }

            // Update the formik value with the formatted date
            formik.setFieldValue(
              textsInputsInformationsPersonnel.birthDate.name,
              formattedValue
            );
          }}
          error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
        />
        {/* ------- city --------- */}
        <ReusableTextField
          icon1={<MdLocationCity className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.city.title}
          label={textsInputsInformationsPersonnel.city.label}
          placeholder={textsInputsInformationsPersonnel.city.placeholder}
          id={textsInputsInformationsPersonnel.city.id}
          type={textsInputsInformationsPersonnel.city.type}
          name={textsInputsInformationsPersonnel.city.name}
          required={textsInputsInformationsPersonnel.city.required}
          helperText={textsInputsInformationsPersonnel.city.helperText}
          afterFocus={textsInputsInformationsPersonnel.city.afterFocus}
          errorText={formik.errors.city}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
        />
        {/* ------- phone number --------- */}
        <ReusableTextField
          icon1={<MdPhone className="iconInput" />}
          positionIcon1="start"
          title={textsInputsInformationsPersonnel.phoneNumber.title}
          label={textsInputsInformationsPersonnel.phoneNumber.label}
          placeholder={textsInputsInformationsPersonnel.phoneNumber.placeholder}
          id={textsInputsInformationsPersonnel.phoneNumber.id}
          type={textsInputsInformationsPersonnel.phoneNumber.type}
          name={textsInputsInformationsPersonnel.phoneNumber.name}
          required={textsInputsInformationsPersonnel.phoneNumber.required}
          helperText={textsInputsInformationsPersonnel.phoneNumber.helperText}
          afterFocus={textsInputsInformationsPersonnel.phoneNumber.afterFocus}
          errorText={formik.errors.phoneNumber}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
        />
      </form>

      <div className="text-center mt-6 mb-6">
        <CustomButton
          onClick={() => setConfirmSubmit(true)}
          colorConfirm="blue"
          form="informations-personnel-form"
          // type="submit"
          disabled={loading || !dataIsUpdated}
          width=" w-full md:w-1/2  m-auto"
        >
          {loading
            ? "Loading..."
            : !dataIsUpdated
            ? "Pas de changement"
            : "Modifier"}
        </CustomButton>
      </div>
      <div className="h-5">
        {errorRegisterMsg && (
          <div className="text-red-500 text-center text-xs md:text-sm    ">
            {" "}
            {/* Fixed height for error message */}
            {errorRegisterMsg}
          </div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center text-xs md:text-sm      ">
            {" "}
            {/* Fixed height for error message */}
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationsPersonnel;
