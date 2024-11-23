import { useEffect, useRef } from "react";

export interface ConfirmationPopUpProps {
  onClose: () => void;
  onConfirme: () => void;
  text: string;
  show: boolean;
  confirmText?: string;
  cancelText?: string;
  icon?: JSX.Element;
  colorConfirm?: "red" | "blue" | "green" | "yellow" | "teal";
  fixPosition?: string;
}
export const useConfirmationPopUp = (props: ConfirmationPopUpProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.onClose(); // Call the onClose function
      }
    };

    if (props.show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.show, props.onClose]);
  return { ...props, modalRef };
};
