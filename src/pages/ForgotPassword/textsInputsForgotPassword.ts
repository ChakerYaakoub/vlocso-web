import { ForgotPasswordInputs } from "../../models/Inputs/FormType";

export const textsInputsForgotPassword: ForgotPasswordInputs = {
  email: {
    title: "Email",
    label: "Email",
    id: "email",
    type: "text",
    name: "email",
    helperText: "Veuillez entrer votre email",
    placeholder: "example@gmail.com",
    afterFocus:
      "Entrez votre adresse email pour réinitialiser votre mot de passe",
    size: "small",
    required: true,
  },
};
