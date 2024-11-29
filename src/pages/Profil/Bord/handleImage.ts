import { API_ENDPOINTS } from "../../../https"; // Import the endpoints
import { uploadImage } from "../../../utils/cloundinary";
import { FormValuesBord } from "./useBord";

export const handleImage = async (value: FormValuesBord, userId: number) => {
  try {
    // @ts-ignore
    const NewUrlImageUser = await uploadImage(value.urlImageUser as File);
    const response = await fetch(API_ENDPOINTS.UPDATE_USER_IMAGE(userId), {
      // Use the endpoint
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ urlImageUser: NewUrlImageUser }),
    });
    console.log("response image image", response);

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
