import React, { useEffect, useRef } from "react";

interface PopupChildrenProps {
  children: React.ReactNode;
  zIndex?: number;
  onClose?: () => void;
  show?: boolean;
  customClass?: string;
}

const PopupChildren: React.FC<PopupChildrenProps> = ({
  children,
  zIndex = 999,
  onClose = () => {},
  show = true,
  customClass = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close when clicking outside
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div
      // pl-0 lg:pl-72.5
      // z-99999 999
      className={`fixed inset-0 z-50 flex justify-center items-center w-full 
      h-full bg-opacity-50 pl-0 overflow-auto max-h-screen  `}
      style={{ backgroundColor: "#000000a6" }}
    >
      <div ref={modalRef} className={customClass}>
        {children}
      </div>
    </div>
  );
};
export default PopupChildren;
