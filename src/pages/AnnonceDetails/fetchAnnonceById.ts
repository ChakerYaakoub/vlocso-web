// fetchAnnonceById.ts

import { API_ENDPOINTS } from "../../https";
import { AnnonceByIdResponse } from "../../models/Annonce";

export const fetchAnnonceById = async (id: string) => {
  try {
    const response = await fetch(API_ENDPOINTS.GET_ANNONCE_BY_ID(id));
    if (!response.ok) {
      throw new Error("Failed to fetch annonce");
    }
    const data = await response.json();
    return data as AnnonceByIdResponse;
  } catch (error) {
    throw error;
  }
};
