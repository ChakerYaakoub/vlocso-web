import { API_ENDPOINTS } from "../../https";
import { CreateAnnonce, FormValuesCreateAnnonce } from "../../models/Annonce";
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

// response example
// {
//   "data": {
//       "annonceId": 6,
//       "title": "12121",
//       "price": "121212",
//       "startDate": "2024-11-24T16:32:32.119710897",
//       "endDate": "2025-01-24T16:32:32.119715787",
//       "quantity": 1,
//       "transaction": "Location",
//       "annonceState": "ACTIVE",
//       "country": "France",
//       "city": "Corte ",
//       "phoneNumber": "06214185484811",
//       "premium": false,
//       "vehicle": {
//           "vehicleId": 7,
//           "type": "Voiture",
//           "mark": "Mercedes-Benz",
//           "model": "Classe B",
//           "year": 2001,
//           "fuelType": "Diesel",
//           "gearbox": "Automatique",
//           "klmCounter": "1000",
//           "condition": "Neuf",
//           "climatisation": "Très bonne état",
//           "description": "sdsd",
//           "createdAt": "2024-11-24T16:32:30.42214748",
//           "updatedAt": "2024-11-24T16:32:30.422178951"
//       },
//       "images": null,
//       "paymentsPremium": null,
//       "interactions": null,
//       "conversations": null,
//       "notifications": null,
//       "createdAt": "2024-11-24T16:32:32.119676256",
//       "updatedAt": "2024-11-24T16:32:32.119696907"
//   },
//   "message": "L'annonce a été créée avec succès"
// }
