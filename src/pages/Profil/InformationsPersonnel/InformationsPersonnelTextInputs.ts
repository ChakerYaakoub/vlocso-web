import { InformationsPersonnelInputs } from "../../../models/Inputs/FormType";

export const textsInputsInformationsPersonnel: InformationsPersonnelInputs = {
  email: {
    title: "Email",
    label: "Email",
    id: "email",
    type: "text",
    size: "medium",
    name: "email",
    placeholder: "example@gmail.com",
    helperText: "Please enter your email",
    afterFocus: "Please enter your email address",
    required: true,
  },

  firstName: {
    title: "First Name",
    label: "First Name",
    id: "firstName",
    type: "text",
    size: "medium",
    name: "firstName",
    placeholder: "John",
    helperText: "Please enter your first name",
    afterFocus: "Please enter your first name",
    required: true,
  },
  lastName: {
    title: "Last Name",
    label: "Last Name",
    id: "lastName",
    type: "text",
    size: "medium",
    name: "lastName",
    placeholder: "Doe",
    helperText: "Please enter your last name",
    afterFocus: "Please enter your last name",
    required: true,
  },
  birthDate: {
    title: "Date of Birth",
    label: "Date of Birth",
    id: "birthDate",
    type: "date",
    size: "medium",
    name: "birthDate",
    placeholder: "MM/DD/YYYY",
    helperText: "Please enter your date of birth",
    afterFocus: "Please enter your date of birth",
    required: true,
  },
  city: {
    title: "City",
    label: "City",
    id: "city",
    type: "text",
    size: "medium",
    name: "city",
    placeholder: "Corte",
    helperText: "Please enter your city",
    afterFocus: "Please enter your city",
    required: true,
  },
  phoneNumber: {
    title: "Phone",
    label: "Phone",
    id: "phoneNumber",
    type: "tel",
    size: "medium",
    name: "phoneNumber",
    placeholder: "06 00 00 00 00",
    helperText: "Please enter your phone number",
    afterFocus: "Please enter your phone number",
    required: true,
  },
};
