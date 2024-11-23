import { FormValues } from "./useLogin";
import { API_ENDPOINTS } from "../../https"; // Import the endpoints
import { AppDispatch } from "../../store/store";
import { loginUser } from "../../reducers/userReducer";
import { LoginRegister } from "../../models/responses/LoginRegister";

export const handleLogin = async (dispatch: AppDispatch, value: FormValues) => {
  try {
    // @ts-ignore
    const result = await dispatch(loginUser(value)); // Dispatch the registerUser action

    console.log("result", result);
    // @ts-ignore
    if (result.payload.userId) {
      return {
        success: true,
        message: "Login successful! You are now logged in.",
        data: result.payload,
      };
    }
    return {
      success: false,
      message: "Login failed. Please check your email or password.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Login failed. Please try again.",
      error,
    };
  }
};
