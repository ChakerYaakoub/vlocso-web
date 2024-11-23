import React from "react";

interface CustomButtonProps {
  onClick: () => void;
  disabled?: boolean;
  colorConfirm?: "red" | "green" | "yellow" | "blue" | "back";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  width?: string;
  form?: string;
  background?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  disabled = false,
  colorConfirm,
  children,
  width = "w-auto",
  type = "button",
  form = "",
  //@ts-ignore
  background = "rgba(0, 0, 0, 0.12)",
}) => {
  // style
  const style = {
    ...(disabled && {
      // color: 'rgba(0, 0, 0, 0.26)',
      boxShadow: "none",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    }),
  };
  // Determine dynamic classes based on colorConfirm prop
  let buttonClass =
    "py-2 px-2 text-sm font-small rounded-lg  focus:outline-none ";
  let buttonColorClass = "";

  switch (colorConfirm) {
    case "red":
      buttonColorClass =
        "text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900";
      break;
    case "green":
      buttonColorClass =
        "text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 ";
      break;
    case "yellow":
      buttonColorClass =
        "text-white bg-yellow-600 hover:bg-yellow-700  dark:bg-yellow-500 dark:hover:bg-yellow-600 ";
      break;

    case "blue":
      buttonColorClass =
        "text-white bg-blue-600 hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600 ";
      break;

    case "back":
      buttonColorClass =
        "text-white bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 ";
      break;

    default:
      buttonColorClass =
        "text-gray-500 bg-white border border-gray-200 dark:bg-gray-700 dark:text-gray-300  dark:border-gray-900 ";
      break;
  }

  return (
    <button
      form={form}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
      className={`${buttonClass} ${width} ${
        disabled
          ? "cursor-not-allowed dark:border dark:border-white "
          : buttonColorClass
      }`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
