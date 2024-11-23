// ... existing code ...

import { API_ENDPOINTS } from "../https";
import { Notification } from "../models/Notification";

// New function to fetch notification by ID of type Notification
export const fetchNotificationById = async (
  id: number
): Promise<Notification> => {
  try {
    const response = await fetch(API_ENDPOINTS.GET_NOTIFICATION_BY_ID(id));
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const notification: Notification = await response.json();
    return notification;
  } catch (error) {
    console.error("Error fetching notification:", error);
    throw error; // Rethrow the error for further handling
  }
};

// ... existing code ...
