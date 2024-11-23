const API_URL = "https://vlocso-backend.onrender.com";
export const API_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  CHANGE_PASSWORD: `${API_URL}/change-password`,
  FORGOT_PASSWORD: `${API_URL}/forgot-password`,
  REGISTER: `${API_URL}/auth/register`,
  ANNONCE: `${API_URL}/annonces`,
  LOGOUT: `${API_URL}/auth/logout`,
  GET_NOTIFICATION_BY_ID: (id: number) => `${API_URL}/notifications/${id}`, // New endpoint for getting notification by ID
  GET_MESSAGE_BY_ID: (id: number) => `${API_URL}/messages/${id}`, // New endpoint for getting message by ID
  UPDATE_USER: `${API_URL}/update-user`,
  UPDATE_USER_IMAGE: `${API_URL}/update-user-image`,
  CHANGE_PASSWORD_PROFILE: `${API_URL}/change-password-profile`,
};
