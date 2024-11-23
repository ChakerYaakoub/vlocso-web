import { BordInputs } from "../../../models/Inputs/FormType";

export const textsInputsBord: BordInputs = {
  urlImageUser: {
    title: "Profile Image",
    label: "Profile Image",
    id: "urlImageUser",
    type: "text",
    size: "medium",
    name: "urlImageUser",
    placeholder:
      "Ajoutez une photo de profil pour augmenter la confiance d’autres utilisateurs",
    helperText: " ",
    afterFocus: " ",
    required: true,
  },
};
