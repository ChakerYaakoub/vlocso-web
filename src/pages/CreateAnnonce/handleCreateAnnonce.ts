import { API_ENDPOINTS } from "../../https";
import { CreateAnnonce, FormValuesCreateAnnonce } from "../../models/Annonce";

export const handleCreateAnnonce = async (value: FormValuesCreateAnnonce) => {
  const body: CreateAnnonce = {
    annonce: {
      userId: value.userId,
      title: value.title,
      price: value.price,
      transaction: value.transaction,
      quantity: value.quantity,
      city: value.city,
      phoneNumber: value.phoneNumber,
    },
    vehicle: {
      type: value.type,
      mark: value.mark,
      model: value.model,
      year: value.year,
      gearbox: value.gearbox,
      climatisation: value.climatisation,
      condition: value.condition,
      fuelType: value.fuelType,
      klm_counter: value.klm_counter !== "" ? value.klm_counter : "0",
      description: value.description,
    },
    images: [],
  };

  try {
    // @ts-ignore
    const response = await fetch(API_ENDPOINTS.ANNONCE, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    // @ts-ignore
    if (response.ok) {
      return {
        success: true,
        message: "Annonce created successfully!",
        data: response,
      };
    }
    return {
      success: false,
      message: "Annonce creation failed. Please check your inputs.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Annonce creation failed. Please check your inputs.",
      error,
    };
  }
};
