import { FormValues } from "./useRegister";
import { registerUser } from "../../reducers/userReducer"; // Import the registerUser action
import { AppDispatch } from "../../store/store"; // Import your AppDispatch type if you have it

export const handleRegister = async (
  dispatch: AppDispatch,
  value: FormValues
) => {
  const body = {
    email: value.email,
    password: value.password,
    firstName: value.firstName,
    lastName: value.lastName,
    phoneNumber: value.phoneNumber,
    // @ts-ignore
    birthDate: new Date(value.birthDate).toISOString(),
    city: value.city,
  };

  try {
    // @ts-ignore
    const result = await dispatch(registerUser(body)); // Dispatch the registerUser action

    // @ts-ignore
    if (result.payload.userId) {
      return {
        success: true,
        message: "Registration successful! You can now log in.",
        data: result.payload,
      };
    }
    return {
      success: false,
      message: "Registration failed. Please check your inputs.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Registration failed. Please check your inputs.",
      error,
    };
  }
};
