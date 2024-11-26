import { API_ENDPOINTS } from "../../https";
import { AnnonceHome } from "../../models/Annonce";

export const fetchHomeData = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.GET_ANNONCES);
    if (!response.ok) {
      throw new Error("Failed to fetch annonce");
    }
    const data = await response.json();
    return data as AnnonceHome[];
  } catch (error) {
    throw error;
  }
};
