import { ReactNode } from "react";
import { Message } from "../../models/Message";
import { Notification } from "../../models/Notification";
import { useNavigate } from "react-router-dom";

export interface DropDawnNotiMSGProps {
  type: "Notifications" | "Messages";
  data: Notification[] | Message[];
  icon: ReactNode;
  closeMenu: () => void;
  isLoggedIn: boolean;
}

export const useDropDawnNotiMSG = (props: DropDawnNotiMSGProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = props;
  return { ...props, navigate, isLoggedIn };
};
