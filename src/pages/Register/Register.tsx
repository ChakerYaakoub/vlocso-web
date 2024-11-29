import React from "react";
import "./Register.css";
import { RegisterProps, useRegister } from "./useRegister";
import ReusableTextField from "../../components/ReusableTextField/ReusableTextField";
import CustomButton from "../../components/CustomButton/CustomButton";
import CardHeader from "../../components/CardHeader/CardHeader";
import FormCard from "../../components/FormCard/FormCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  MdCalendarToday,
  MdEmail,
  MdLocationCity,
  MdLock,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Register: React.FC<RegisterProps> = (props) => {
  const {
    formik,
    step,
    textsInputsRegister,
    loading,
    errorRegisterMsg,
    successMessage,
    showPassword,
    showConfirmPassword,
    GoToStep2,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    setStep,
    setConfirmSubmit,
  } = useRegister(props);

  return (
    <section className="section">
      <CardHeader
        backPageText={"Retour à la page de connexion"}
        title="Inscription"
        //   otherButton={<div className={` pt-4 top-7 right-2  ${step === 2 ? '' : 'hidden'} `}>
        //     <CustomButton
        //       onClick={() => setStep(1)}
        //       colorConfirm='back'

        //       width="">
        //       <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
        //         <IoMdArrowRoundBack color="white" className="text-xs" />
        //         <span className="block">
        //           Step 1
        //         </span>
        //       </span>
        //     </CustomButton>
        //   </div>

        // }
      />

      <FormCard>
        <div
          className=" bg-blue-500 rounded-full  absolute top-0  left-0  "
          style={{ width: step === 1 ? "50%" : "100%", height: "5px" }}
        ></div>
        {errorRegisterMsg && (
          <div className="text-red-500 text-center text-xs md:text-sm  absolute bottom-2 md:bottom-4 left-0 right-0   ">
            {" "}
            {/* Fixed height for error message */}
            {errorRegisterMsg}
          </div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
            {" "}
            {/* Fixed height for error message */}
            {successMessage}
          </div>
        )}

        <div className={` top-2 left-2 ${step === 2 ? "block" : "hidden"} `}>
          <CustomButton onClick={() => setStep(1)} colorConfirm="back" width="">
            <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
              <IoMdArrowRoundBack color="white" className="text-xs" />
              <span className="block">Step 1</span>
            </span>
          </CustomButton>
        </div>
        <div className="mt-6">
          <form
            onSubmit={formik.handleSubmit}
            id="register-form"
            className=" grid grid-cols-1  gap-4"
          >
            <h2 className="pb-2 font-bold">
              {step === 1
                ? "Step 1: Account Information : "
                : "Step 2: Personal Information : "}
            </h2>
            {step === 1 && (
              <>
                {/* -------email */}
                <ReusableTextField
                  icon1={<MdEmail className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsRegister.step1.email.title}
                  placeholder={textsInputsRegister.step1.email.placeholder}
                  label={textsInputsRegister.step1.email.label}
                  id={textsInputsRegister.step1.email.id}
                  type={textsInputsRegister.step1.email.type}
                  name={textsInputsRegister.step1.email.name}
                  required={textsInputsRegister.step1.email.required}
                  helperText={textsInputsRegister.step1.email.helperText}
                  afterFocus={textsInputsRegister.step1.email.afterFocus}
                  errorText={formik.errors.email}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {/* ------- password  --------- */}
                <ReusableTextField
                  icon1={<MdLock className="iconInput" />}
                  positionIcon1="start"
                  icon2={
                    showPassword ? (
                      <FaRegEyeSlash className="iconInput" />
                    ) : (
                      <FaRegEye className="iconInput" />
                    )
                  }
                  positionIcon2="end"
                  onClickIcon2={togglePasswordVisibility}
                  title={textsInputsRegister.step1.password.title}
                  label={textsInputsRegister.step1.password.label}
                  placeholder={textsInputsRegister.step1.password.placeholder}
                  id={textsInputsRegister.step1.password.id}
                  type={
                    showPassword
                      ? textsInputsRegister.step1.password.type
                      : "text"
                  }
                  name={textsInputsRegister.step1.password.name}
                  required={textsInputsRegister.step1.password.required}
                  helperText={textsInputsRegister.step1.password.helperText}
                  afterFocus={textsInputsRegister.step1.password.afterFocus}
                  errorText={formik.errors.password}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                {/* ------- confirm password --------- */}
                <ReusableTextField
                  icon1={<GrPowerReset className="iconInput" />}
                  positionIcon1="start"
                  icon2={
                    showConfirmPassword ? (
                      <FaRegEyeSlash className="iconInput" />
                    ) : (
                      <FaRegEye className="iconInput" />
                    )
                  }
                  positionIcon2="end"
                  onClickIcon2={toggleConfirmPasswordVisibility}
                  title={textsInputsRegister.step1.confirmPassword.title}
                  label={textsInputsRegister.step1.confirmPassword.label}
                  placeholder={
                    textsInputsRegister.step1.confirmPassword.placeholder
                  }
                  id={textsInputsRegister.step1.confirmPassword.id}
                  type={
                    showConfirmPassword
                      ? textsInputsRegister.step1.confirmPassword.type
                      : "text"
                  }
                  name={textsInputsRegister.step1.confirmPassword.name}
                  required={textsInputsRegister.step1.confirmPassword.required}
                  helperText={
                    textsInputsRegister.step1.confirmPassword.helperText
                  }
                  afterFocus={
                    textsInputsRegister.step1.confirmPassword.afterFocus
                  }
                  errorText={formik.errors.confirmPassword}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                />
              </>
            )}
            {step === 2 && (
              <>
                {/* ------- first name --------- */}

                <ReusableTextField
                  icon1={<MdPerson className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsRegister.step2.firstName.title}
                  label={textsInputsRegister.step2.firstName.label}
                  placeholder={textsInputsRegister.step2.firstName.placeholder}
                  id={textsInputsRegister.step2.firstName.id}
                  type={textsInputsRegister.step2.firstName.type}
                  name={textsInputsRegister.step2.firstName.name}
                  required={textsInputsRegister.step2.firstName.required}
                  helperText={textsInputsRegister.step2.firstName.helperText}
                  afterFocus={textsInputsRegister.step2.firstName.afterFocus}
                  errorText={formik.errors.firstName}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                />
                {/* ------- last name --------- */}
                <ReusableTextField
                  icon1={<MdPerson className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsRegister.step2.lastName.title}
                  label={textsInputsRegister.step2.lastName.label}
                  placeholder={textsInputsRegister.step2.lastName.placeholder}
                  id={textsInputsRegister.step2.lastName.id}
                  type={textsInputsRegister.step2.lastName.type}
                  name={textsInputsRegister.step2.lastName.name}
                  required={textsInputsRegister.step2.lastName.required}
                  helperText={textsInputsRegister.step2.lastName.helperText}
                  afterFocus={textsInputsRegister.step2.lastName.afterFocus}
                  errorText={formik.errors.lastName}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                />
                {/* ------- date of birth --------- */}
                <ReusableTextField
                  icon1={<MdCalendarToday className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsRegister.step2.birthDate.title}
                  label={textsInputsRegister.step2.birthDate.label}
                  placeholder={textsInputsRegister.step2.birthDate.placeholder}
                  id={textsInputsRegister.step2.birthDate.id}
                  type="text"
                  name={textsInputsRegister.step2.birthDate.name}
                  required={textsInputsRegister.step2.birthDate.required}
                  helperText={textsInputsRegister.step2.birthDate.helperText}
                  afterFocus={textsInputsRegister.step2.birthDate.afterFocus}
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
                          textsInputsRegister.step2.birthDate.name,
                          e.target.value.slice(0, -1)
                        );
                        return;
                      }
                      formik.setFieldValue(
                        textsInputsRegister.step2.birthDate.name,
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
                      formattedValue = `${digitsOnly.slice(
                        0,
                        2
                      )}/${digitsOnly.slice(2, 4)}`;
                    } else {
                      formattedValue = digitsOnly;
                    }

                    if (digitsOnly.length >= 4) {
                      formattedValue += `/${digitsOnly.slice(4, 8)}`;
                    }

                    // Update the formik value with the formatted date
                    formik.setFieldValue(
                      textsInputsRegister.step2.birthDate.name,
                      formattedValue
                    );
                  }}
                  error={
                    formik.touched.birthDate && Boolean(formik.errors.birthDate)
                  }
                />
                {/* ------- city --------- */}
                <ReusableTextField
                  icon1={<MdLocationCity className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsRegister.step2.city.title}
                  label={textsInputsRegister.step2.city.label}
                  placeholder={textsInputsRegister.step2.city.placeholder}
                  id={textsInputsRegister.step2.city.id}
                  type={textsInputsRegister.step2.city.type}
                  name={textsInputsRegister.step2.city.name}
                  required={textsInputsRegister.step2.city.required}
                  helperText={textsInputsRegister.step2.city.helperText}
                  afterFocus={textsInputsRegister.step2.city.afterFocus}
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
                  title={textsInputsRegister.step2.phoneNumber.title}
                  label={textsInputsRegister.step2.phoneNumber.label}
                  placeholder={
                    textsInputsRegister.step2.phoneNumber.placeholder
                  }
                  id={textsInputsRegister.step2.phoneNumber.id}
                  type={textsInputsRegister.step2.phoneNumber.type}
                  name={textsInputsRegister.step2.phoneNumber.name}
                  required={textsInputsRegister.step2.phoneNumber.required}
                  helperText={textsInputsRegister.step2.phoneNumber.helperText}
                  afterFocus={textsInputsRegister.step2.phoneNumber.afterFocus}
                  errorText={formik.errors.phoneNumber}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                />
              </>
            )}
            {/* {errorRegisterMsg && (
              <div className="error-message">{errorRegisterMsg}</div>
            )} */}

            <div className="text-center mt-6 mb-6">
              <CustomButton
                onClick={() =>
                  step === 1 ? GoToStep2() : setConfirmSubmit(true)
                }
                colorConfirm="blue"
                form="register-form"
                disabled={loading}
                // type="submit"
                width=" w-full md:w-1/2  m-auto"
              >
                {loading ? "Loading..." : step === 1 ? "Continue" : "Register"}
              </CustomButton>
            </div>
          </form>
        </div>
      </FormCard>
    </section>
  );
};

export default Register;
