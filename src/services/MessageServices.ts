// ... existing code ...

import { API_ENDPOINTS } from "../https";
import { Message } from "../models/Message";

// New function to fetch notification by ID of type Notification
export const fetchMessageById = async (id: number): Promise<Message> => {
  try {
    const response = await fetch(API_ENDPOINTS.GET_MESSAGE_BY_ID(id));
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const message: Message = await response.json();
    return message;
  } catch (error) {
    console.error("Error fetching message:", error);
    throw error; // Rethrow the error for further handling
  }
};

// ... existing code ...
