import React from "react";
import "./MotDePasse.css";
import { MotDePasseProps, useMotDePasse } from "./useMotDePasse";
import { MdLock } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ReusableTextField from "../../../components/ReusableTextField/ReusableTextField";
import CustomButton from "../../../components/CustomButton/CustomButton";

const MotDePasse: React.FC<MotDePasseProps> = (props) => {
  const {
    //@ts-ignore
    user,
    formik,
    errorChangePasswordMsg,
    successChangePasswordMsg,
    showPassword,
    showConfirmPassword,
    PasswordText,
    ConfirmPasswordText,
    loading,
    handleChangePassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = useMotDePasse(props);
  return (
    <div className="m-3 md:m-7">
      {errorChangePasswordMsg && (
        <div className="text-red-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
          {" "}
          {/* Fixed height for error message */}
          {errorChangePasswordMsg}
        </div>
      )}
      {successChangePasswordMsg && (
        <div className="text-green-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
          {" "}
          {/* Fixed height for error message */}
          {successChangePasswordMsg}
        </div>
      )}
      <form onSubmit={formik.handleSubmit} id="change-password-form">
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
          title={PasswordText.title}
          label={PasswordText.label}
          id={PasswordText.id}
          type={showPassword ? PasswordText.type : "text"}
          size="medium"
          placeholder={PasswordText.placeholder}
          required={PasswordText.required}
          name={PasswordText.name}
          heightFormHelperText={2}
          helperText={PasswordText.helperText}
          errorText={formik.errors.password}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
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
          placeholder={ConfirmPasswordText.placeholder}
          onClickIcon2={toggleConfirmPasswordVisibility}
          title={ConfirmPasswordText.title}
          label={ConfirmPasswordText.label}
          id={ConfirmPasswordText.id}
          type={showConfirmPassword ? ConfirmPasswordText.type : "text"}
          size="medium"
          required={ConfirmPasswordText.required}
          name={ConfirmPasswordText.name}
          heightFormHelperText={2}
          helperText={ConfirmPasswordText.helperText}
          errorText={formik.errors.confirmPassword}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
        />

        <div className="text-center mt-4">
          {" "}
          {/* Fixed height for button container */}
          <CustomButton
            onClick={handleChangePassword}
            colorConfirm="blue"
            form="change-password-form"
            type="submit"
            width=" w-full md:w-1/2  m-auto"
          >
            {loading ? "Loading ..." : "Modifier le mot de passe"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default MotDePasse;
