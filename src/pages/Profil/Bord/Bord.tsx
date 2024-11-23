import React from "react";
import "./Bord.css";
import { BordProps, useBord } from "./useBord";
import UploadImageVideo from "../../../components/UploadImage/UploadImage";
import { textsInputsBord } from "./textsInputsBord";
import {
  FaBullhorn,
  FaHistory,
  FaEnvelope,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Bord: React.FC<BordProps> = (props) => {
  //@ts-ignore
  const { formik, onSave, onNavigate, onLogout } = useBord(props);
  return (
    <div className="relative">
      <UploadImageVideo
        title={textsInputsBord.urlImageUser.title}
        id={textsInputsBord.urlImageUser.id}
        type="image"
        name={textsInputsBord.urlImageUser.name}
        helperText={textsInputsBord.urlImageUser.helperText}
        titleBottom={`${formik.values.firstName} ${formik.values.lastName}`}
        placeholder={textsInputsBord.urlImageUser.placeholder}
        // afterFocus="Test After Focus"
        required
        // errorText="Test Error Text"
        onBlur={formik.handleBlur}
        value={formik.values.urlImageUser}
        formik={formik}
        label={textsInputsBord.urlImageUser.label}
        onChange={formik.handleChange}
        maxFileSize={1000}
        aspect={1}
        error={false}
        onSave={onSave}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <button
          className="flex items-center justify-center gap-2 p-2 m-2 borderBtn"
          onClick={() => onNavigate("/mes-annonces")}
        >
          <FaBullhorn className="icon" />
          <span className="ml-2">Mes Annonces</span>
        </button>
        <button
          className="flex items-center justify-center gap-2  p-2 m-2 borderBtn"
          onClick={() => onNavigate("/mon-historique")}
        >
          <FaHistory className="icon" />
          <span className="ml-2">Mon historique</span>
        </button>
        <button
          className="flex items-center justify-center gap-2 p-2 m-2 borderBtn"
          onClick={() => onNavigate("/messagerie")}
        >
          <FaEnvelope className="icon" />
          <span className="ml-2">Messagerie</span>
        </button>
        <button
          className="flex items-center justify-center gap-2  p-2 m-2 borderBtn"
          onClick={() => onNavigate("/mes-achats")}
        >
          <FaShoppingCart className="icon" />
          <span className="ml-2">Mes achats</span>
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center justify-center gap-2  p-2 m-2 borderBtn premiumBtn"
          onClick={() => onNavigate("/mettre-annonce-premium")}
        >
          <span className="ml-2">Mettre une annonce en premium</span>
          <MdOutlineWorkspacePremium className="icon" />
        </button>
      </div>

      {/* <button
        className="flex items-center justify-end gap-2  p-2 m-2 borderBtn absolute top-0 right-0"
        onClick={onLogout}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Bord;
