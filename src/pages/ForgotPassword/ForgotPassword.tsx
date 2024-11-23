import React from "react";
import { MdEmail } from "react-icons/md";
import CardHeader from "../../components/CardHeader/CardHeader";
import FormCard from "../../components/FormCard/FormCard";
import ReusableTextField from "../../components/ReusableTextField/ReusableTextField";
import "./ForgotPassword.css";
import { ForgotPasswordProps, useForgotPassword } from "./useForgotPassword";
import CustomButton from "../../components/CustomButton/CustomButton";

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
  const {
    emailText,
    formik,
    loading,
    errorMesssage,
    successMessage,
    submitForgotPassword,
  } = useForgotPassword(props);

  return (
    <section className="section">
      <CardHeader
        backPageText="Retour à la page de connexion"
        title="Réinitialiser le mot de passe"
      />
      <FormCard>
        <div className="mt-6">
          {errorMesssage && (
            <div className="text-red-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
              {" "}
              {/* Fixed height for error message */}
              {errorMesssage}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
              {" "}
              {/* Fixed height for error message */}
              {successMessage}
            </div>
          )}
          <form
            onSubmit={formik.handleSubmit}
            id="forgot-password-form"
            className="mb-4"
          >
            <ReusableTextField
              icon1={<MdEmail className="iconInput" />}
              positionIcon1="start"
              title={emailText.title}
              label={emailText.label}
              placeholder={emailText.placeholder}
              id={emailText.id}
              type={emailText.type}
              size="medium"
              required={emailText.required}
              name={emailText.name}
              helperText={emailText.helperText}
              afterFocus={emailText.afterFocus}
              errorText={formik.errors.email}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <div className="text-center mt-8">
              <CustomButton
                colorConfirm="blue"
                form="forgot-password-form"
                type="submit"
                width=" w-full md:w-1/2  m-auto"
                onClick={submitForgotPassword}
              >
                {loading ? "Loading ..." : "Réinitialiser le mot de passe"}
              </CustomButton>
            </div>
          </form>
        </div>
      </FormCard>
    </section>
  );
};

export default ForgotPassword;
