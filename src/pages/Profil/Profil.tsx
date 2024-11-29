import React, { useState } from "react";
import "./Profil.css";
import { ProfilProps, useProfil } from "./useProfil";
import Bord from "./Bord/Bord";
import MotDePasse from "./MotDePasse/MotDePasse";
import { MdDashboard, MdPerson, MdLock } from "react-icons/md";
import InformationsPersonnel from "./InformationsPersonnel/InformationsPersonnel";
import LoaderUpdate from "../../components/LoaderUpdate/LoaderUpdate";

const Profil: React.FC<ProfilProps> = (props) => {
  const { user, onLogout, loading } = useProfil(props);
  const [activeTab, setActiveTab] = useState("Bord");

  const renderContent = () => {
    switch (activeTab) {
      case "Bord":
        return <Bord user={user!} />;
      case "InformationsPersonnel":
        return <InformationsPersonnel user={user!} />;
      case "MotDePasse":
        return <MotDePasse user={user!} />;
      default:
        return <Bord user={user!} />;
    }
  };

  if (!user) {
    return null; // Add loader
  } else {
    return (
      <section className="section relative">
        {loading && <LoaderUpdate />}
        <h1 className="text-2xl font-bold mb-4">Votre espace personnel</h1>
        <div className="flex flex-col lg:flex-row">
          <div className=" mb-4 md:mb-0 ">
            <button
              className="flex items-center justify-end gap-2 float-right p-2 m-2 borderBtn  block md:hidden"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>

          <div className="md:w-full lg:w-1/4 p-4 bg-gray-100  ">
            <button
              className={`block w-full text-left p-2 mb-2 ${
                activeTab === "Bord"
                  ? "bg-slate-400 text-white active-tab"
                  : "bg-white text-black "
              }`}
              onClick={() => setActiveTab("Bord")}
            >
              <MdDashboard className="inline-block mr-2" />
              Tableau de bord
            </button>
            <button
              className={`block w-full text-left p-2 mb-2 ${
                activeTab === "InformationsPersonnel"
                  ? "bg-slate-400 text-white active-tab"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("InformationsPersonnel")}
            >
              <MdPerson className="inline-block mr-2" />
              Informations personnel
            </button>
            <button
              className={`block w-full text-left p-2 mb-2 ${
                activeTab === "MotDePasse"
                  ? "bg-slate-400 text-white active-tab"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("MotDePasse")}
            >
              <MdLock className="inline-block mr-2" />
              Mot de passe
            </button>
          </div>
          <div className="lg:w-3/4 md:w-full p-4 bg-white">
            {renderContent()}
          </div>
        </div>

        <button
          className="flex items-center justify-end gap-2  p-2 m-2 borderBtn absolute top-4 right-0 hidden md:block"
          onClick={onLogout}
        >
          Logout
        </button>
      </section>
    );
  }
};

export default Profil;
