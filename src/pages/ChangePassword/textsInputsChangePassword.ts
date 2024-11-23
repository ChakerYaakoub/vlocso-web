import { ChangePasswordInputs } from "../../models/Inputs/FormType";

export const textsInputsChangePassword: ChangePasswordInputs = {
  password: {
    title: "Nouveau mot de passe",
    label: "Nouveau mot de passe",
    id: "password",
    type: "password",
    size: "medium",
    name: "password",
    placeholder: "P@ssword123",
    helperText: "Veuillez entrer votre nouveau mot de passe",
    afterFocus:
      "Minimum 8 caractères, incluant au moins 1 symbole, 1 chiffre et 1 lettre majuscule",
    required: true,
  },
  confirmPassword: {
    title: "Confirmer le mot de passe",
    label: "Confirmer le mot de passe",
    id: "confirmPassword",
    type: "password",
    size: "medium",
    name: "confirmPassword",
    placeholder: "P@ssword123",
    helperText: "Veuillez confirmer votre nouveau mot de passe",
    afterFocus: "Les mots de passe doivent correspondre",
    required: true,
  },
};
