import { FormValuesInformationsPersonnel } from "./useInformationsPersonnel";
import { API_ENDPOINTS } from "../../../https"; // Import the endpoints

export const handleUpdateInformationsPersonnel = async (
  value: FormValuesInformationsPersonnel
) => {
  try {
    const response = await fetch(API_ENDPOINTS.UPDATE_USER, {
      method: "PUT",
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
      message: "Information updated successfully!",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Update failed. Please try again.",
      error,
    };
  }
};
