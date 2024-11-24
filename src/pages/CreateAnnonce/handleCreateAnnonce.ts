import { API_ENDPOINTS } from "../../https";
import {
  AnnonceResponse,
  CreateAnnonce,
  FormValuesCreateAnnonce,
} from "../../models/Annonce";
import { uploadImage } from "../../utils/cloundinary";

export const handleCreateAnnonce = async (value: FormValuesCreateAnnonce) => {
  try {
    // for each image, upload to cloudinary

    const imagesUrl = await Promise.all(
      // @ts-ignore
      value.images.map((image) => uploadImage(image as File))
    );

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
      images: imagesUrl,
    };

    const response = await fetch(API_ENDPOINTS.ANNONCE, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (response.ok) {
      const data: AnnonceResponse = await response.json();
      return {
        success: true,
        message: "Annonce created successfully!",
        data: data.data,
      };
    }

    return {
      success: false,
      message: "Annonce creation failed. Try again later.",
    };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      message: "Annonce creation failed. Try again later.",
      error,
    };
  }
};
