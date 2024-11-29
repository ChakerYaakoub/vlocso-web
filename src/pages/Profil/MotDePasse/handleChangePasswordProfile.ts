import { API_ENDPOINTS } from "../../../https"; // Import the endpoints

export const handleChangePasswordProfile = async (
  password: string,
  userId: number
) => {
  try {
    const response = await fetch(
      API_ENDPOINTS.CHANGE_PASSWORD_PROFILE(userId),
      {
        // Use the endpoint
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ password }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Password changed successfully.",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to change password. Please try again.",
      error,
    };
  }
};
