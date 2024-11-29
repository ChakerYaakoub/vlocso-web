import { MdLock } from "react-icons/md";
import { ChangePasswordProps, useChangePassword } from "./useChangePassword";

import FormCard from "../../components/FormCard/FormCard";
import ReusableTextField from "../../components/ReusableTextField/ReusableTextField";
import CustomButton from "../../components/CustomButton/CustomButton";
import CardHeader from "../../components/CardHeader/CardHeader";
import { GrPowerReset } from "react-icons/gr";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const ChangePassword: React.FC<ChangePasswordProps> = (props) => {
  const {
    PasswordText,
    ConfirmPasswordText,
    formik,
    loading,
    errorChangePasswordMsg,
    successChangePasswordMsg,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    setConfirmSubmit,
  } = useChangePassword(props);

  const handleChangePassword = () => {
    setConfirmSubmit(true); // Trigger the confirmation to submit the form
  };

  return (
    <section className="section">
      <CardHeader
        backPageText="Retour à la page de connexion"
        title="Modification de votre mot de passe"
      />
      <FormCard>
        <div className="mt-6 ">
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
              afterFocus={PasswordText.afterFocus}
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
              afterFocus={ConfirmPasswordText.afterFocus}
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
      </FormCard>
    </section>
  );
};
