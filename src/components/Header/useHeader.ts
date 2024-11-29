import { useState, useEffect } from "react";
import { selectUserData } from "../../reducers/userReducer";
import { fetchNotificationById } from "../../services/NotificationServices";
import { useSelector } from "react-redux";
import { Notification } from "../../models/Notification";
import { Message } from "../../models/Message";
import { fetchMessageById } from "../../services/MessageServices";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  isLoggedIn: boolean;
}

export const useHeader = (props: HeaderProps) => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const voitureNav = {
    type: "Voiture",
    to: ["location", "vente", "toutesVoitures"],
  };

  const motoNav = {
    type: "Moto",
    to: ["location", "vente", "toutesMotos"],
  };
  const userData = useSelector(selectUserData);
  const { isLoggedIn } = props;

  useEffect(() => {
    if (isLoggedIn && userData?.userId) {
      fetchNotificationById(userData?.userId)
        .then((fetchedNotifications) => {
          setNotifications([fetchedNotifications]);
        })
        .catch((error) => {
          console.error("Failed to fetch notifications:", error);
          setNotifications([]);
        });

      fetchMessageById(userData?.userId)
        .then((fetchedMessages) => {
          setMessages([fetchedMessages]);
        })
        .catch((error) => {
          console.error("Failed to fetch messages:", error);
          setMessages([]);
        });
    } else {
      setNotifications([]);
    }
  }, [isLoggedIn, userData]);

  return {
    ...props,
    voitureNav,
    motoNav,
    notifications,
    messages,
    navigate,
  };
};
