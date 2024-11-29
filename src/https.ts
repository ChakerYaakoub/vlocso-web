const API_URL = "https://vlocso-backend.onrender.com";
export const API_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  CHANGE_PASSWORD: `${API_URL}/update-password`,
  FORGOT_PASSWORD: `${API_URL}/forgot-password`,
  REGISTER: `${API_URL}/auth/register`,
  ANNONCE: `${API_URL}/annonces`,
  LOGOUT: `${API_URL}/auth/logout`,
  USER: (id: string) => `${API_URL}/users/${id}`,
  GET_NOTIFICATION_BY_ID: (id: number) => `${API_URL}/notifications/${id}`, // New endpoint for getting notification by ID
  GET_MESSAGE_BY_ID: (id: number) => `${API_URL}/messages/${id}`, // New endpoint for getting message by ID
  UPDATE_USER: (id: string) => `${API_URL}/users/${id}`,
  UPDATE_USER_IMAGE: (id: number) => `${API_URL}/users/${id}`,
  CHANGE_PASSWORD_PROFILE: (id: number) => `${API_URL}/users/${id}`,
  GET_ANNONCE_BY_ID: (id: string) => `${API_URL}/annonces/${id}`,
  GET_ANNONCES: `${API_URL}/annonces`,
};
