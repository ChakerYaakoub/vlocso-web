import { FormValues } from "./useForgotPassword";
import { API_ENDPOINTS } from "../../https"; // Import the endpoints

export const handleForgotPassword = async (value: FormValues) => {
  try {
    const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
      // Use the endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Password reset link sent to your email.",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send reset link. Please try again.",
      error,
    };
  }
};
