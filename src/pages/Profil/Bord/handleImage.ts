import { API_ENDPOINTS } from "../../../https"; // Import the endpoints
import { FormValuesBord } from "./useBord";

export const handleImage = async (value: FormValuesBord) => {
  try {
    const response = await fetch(API_ENDPOINTS.UPDATE_USER_IMAGE, {
      // Use the endpoint
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
      mode: "no-cors", // Set the request's mode to 'no-cors'
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Image updated successfully!",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Image update failed.",
      error,
    };
  }
};
