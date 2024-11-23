import React from "react";
import "./MesAnnonces.css";
import { MesAnnoncesProps, useMesAnnonces } from "./useMesAnnonces";
import CardHeader from "../../components/CardHeader/CardHeader";
import { IoMdAddCircleOutline, IoMdMegaphone } from "react-icons/io";
import { IoMegaphone } from "react-icons/io5";
import { MdExposurePlus1 } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const MesAnnonces: React.FC = (props: MesAnnoncesProps) => {
  const { handleNavigate } = useMesAnnonces(props);
  return (
    <section className="section">
      <CardHeader
        backPageText="Retour à la page de profil"
        title="Mes annonces "
      />
      <div className="grid grid-cols-2 gap-4 md:gap-4 justify-around items-center w-full">
        <div className="p-4 flex flex-col items-center justify-center gap-4 bg-gray-100 rounded-lg w-full md:w-3/4 ml-auto">
          <h1 className="text-sm md:text-2xl font-bold mb-4 ">
            Créer une annonce
          </h1>
          <div className="relative">
            <IoMegaphone className="text-6xl mb-4 p-2" />
            <div className="absolute top-0 right-0 text-sm">
              <MdExposurePlus1 />
            </div>
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleNavigate("create-annonce")}
          >
            Continuer
          </button>
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-4 bg-gray-100 rounded-lg w-full md:w-3/4 mr-auto">
          <h1 className="text-sm md:text-2xl font-bold mb-4 ">
            Relancer annonce
          </h1>
          <div className="relative">
            <IoMegaphone className="text-6xl mb-4 p-2" />
            <div className="absolute top-0 right-0 text-sm">
              <GrPowerReset />
            </div>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleNavigate("relaunch-annonce")}
          >
            Continuer
          </button>
        </div>
      </div>
    </section>
  );
};

export default MesAnnonces;
