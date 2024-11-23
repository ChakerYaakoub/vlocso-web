import { MdEmail } from "react-icons/md";
import CardHeader from "../../components/CardHeader/CardHeader";
import FormCard from "../../components/FormCard/FormCard";
import ReusableTextField from "../../components/ReusableTextField/ReusableTextField";
import "./Login.css";
import { LoginProps, useLogin } from "./useLogin";
import { IoKeySharp } from "react-icons/io5";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const Login: React.FC<LoginProps> = (props) => {
  const {
    PasswordText,
    emailText,
    formik,
    loading,
    errorLoginMsg,
    setConfirmSubmit,
    showPassword,
    togglePasswordVisibility,
  } = useLogin(props);
  return (
    <section className="section">
      <CardHeader
        backPageText="Retour à la page d’accueil"
        title="Authentification"
      />

      <FormCard
      // width=" w-11/12 md:w-1/2 lg:w-5/12"
      >
        <div className="mt-6">
          <form
            onSubmit={formik.handleSubmit}
            // className="mb-3"
            id="login-form"
          >
            <div className="">
              {/* email  */}

              <ReusableTextField
                icon1={<MdEmail className="iconInput" />}
                positionIcon1="start"
                placeholder={emailText.placeholder}
                title={emailText.title}
                label={emailText.label}
                id={emailText.id}
                type={emailText.type}
                size="medium"
                required={emailText.required}
                max={emailText.max}
                name={emailText.name}
                heightFormHelperText={2}
                helperText={emailText.helperText}
                afterFocus={emailText.afterFocus}
                errorText={formik.errors.email}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}

                // passwordv
              />
              <ReusableTextField
                icon1={<IoKeySharp className="iconInput" />}
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
                placeholder={PasswordText.placeholder}
                type={showPassword ? PasswordText.type : "text"}
                title={PasswordText.title}
                label={PasswordText.label}
                id={PasswordText.id}
                size="medium"
                required={PasswordText.required}
                max={PasswordText.max}
                name={PasswordText.name}
                heightFormHelperText={2}
                helperText={PasswordText.helperText}
                afterFocus={PasswordText.afterFocus}
                errorText={formik.errors.password}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />

              <div className=" p-2 md:pb-4  text-center  text-xs md:text-sm ">
                <Link
                  to={"/forgot-password"}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {" "}
                  Mot de passe oublié ?
                </Link>
              </div>

              <div className="text-center">
                <CustomButton
                  onClick={() => setConfirmSubmit(true)}
                  colorConfirm="blue"
                  form="login-form"
                  type="submit"
                  width=" w-full md:w-1/2  m-auto"
                >
                  {loading ? "Loading ..." : "S’authentifier"}
                </CustomButton>
              </div>

              <div>
                <div className=" p-2 md:p-4 text-center text-xs">
                  Vous n’avez toujours pas de compte ?{" "}
                  {/* <Link
                    to={"/change-password"}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    {" "}
                    Cliquez ici{" "}
                  </Link> */}
                  <Link
                    to={"/register"}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    {" "}
                    Cliquez ici{" "}
                  </Link>
                </div>
              </div>
            </div>

            {errorLoginMsg && (
              <div className="text-red-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0  ">
                {" "}
                {/* Fixed height for error message */}
                {errorLoginMsg}
              </div>
            )}
          </form>

          <div className="flex items-center gap-2 block md:hidden py-2">
            <hr className="w-1/2 border-t border-gray-300" />
            <span className=" w-full  text-gray-500 text-xs text-center ">
              Or continuer avec
            </span>
            <hr className="w-1/2 border-t border-gray-300" />
          </div>

          <div className="flex gap-2 ">
            <CustomButton onClick={() => {}} width="w-5/12 m-auto ">
              <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
                <FcGoogle className="text-xl md:text-3xl" />

                <span className="hidden md:block">Continuer avec Google</span>
                <span className="block md:hidden">Google</span>
              </span>
            </CustomButton>

            <CustomButton onClick={() => {}} width="w-5/12 m-auto ">
              <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
                <FaFacebook color="#3b5998" className="text-xl md:text-3xl" />
                <span className="hidden md:block">Continuer avec Facebook</span>
                <span className="block md:hidden">Facebook</span>
              </span>
            </CustomButton>
          </div>
        </div>
      </FormCard>
    </section>
  );
};
