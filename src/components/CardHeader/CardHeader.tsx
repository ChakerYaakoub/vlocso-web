import React from "react";
import "./CardHeader.css";
import { CardHeaderProps, useCardHeader } from "./useCardHeader";
import CustomButton from "../CustomButton/CustomButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import logo from "../../assets/vloco-normal.png"; // Assuming logo is a static asset
const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const {
    backPageText,
    navigate,
    title,
    backFc,
    otherButton = null,
  } = useCardHeader(props);
  return (
    <div className=" min-h-20 flex flex-col p-4">
      <div className=" left-2 top-2">
        <CustomButton
          onClick={() => {
            backFc ? backFc() : navigate(-1);
          }}
          colorConfirm="blue"
          width=""
        >
          <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
            <IoMdArrowRoundBack color="white" className="text-xs" />
            <span className="block">{backPageText}</span>
          </span>
        </CustomButton>

        {otherButton}
      </div>
      <div className="flex flex-col items-center justify-center gap-2 pt-4">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 lg:w-25 lg:h-25 md:w-25 md:h-25"
        />
        <h1 className="font-semibold underline h1">{title}</h1>
      </div>
    </div>
  );
};

export default CardHeader;
