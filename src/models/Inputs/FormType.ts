export interface Option {
  // name: string;
  label: string;
  value: string;
}

export interface InputField {
  title: string;
  label: string;
  id: string;
  type: string;
  size: string;
  name: string;
  max?: number;
  helperText: string;
  afterFocus: string;
  aspect?: number;
  required: boolean;
  placeholder?: string;
  min?: number;
}

export interface LoginInputs {
  email: InputField;
  password: InputField;
}

export interface ForgotPasswordInputs {
  email: InputField;
}

export interface ChangePasswordInputs {
  password: InputField;
  confirmPassword: InputField;
}

export interface RegisterInputs {
  step1: {
    email: InputField;
    password: InputField;
    confirmPassword: InputField;
  };
  step2: {
    firstName: InputField;
    lastName: InputField;
    birthDate: InputField;
    city: InputField;
    phoneNumber: InputField;
  };
}

export interface BordInputs {
  urlImageUser: InputField;
}

export interface InformationsPersonnelInputs {
  email: InputField;
  firstName: InputField;
  lastName: InputField;
  birthDate: InputField;
  city: InputField;
  phoneNumber: InputField;
}

export interface CreateAnnonceInputs {
  title: InputField;
  price: InputField;
  transaction: InputField;
  quantity: InputField;
  city: InputField;
  phoneNumber: InputField;

  type: InputField;
  mark: InputField;
  model: InputField;
  year: InputField;
  gearbox: InputField;
  climatisation: InputField;
  condition: InputField;
  fuelType: InputField;
  klm_counter: InputField;
  description: InputField;

  images: InputField;
}
