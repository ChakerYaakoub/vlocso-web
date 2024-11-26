import React from "react";
import "./AnnonceDetails.css";
import { AnnonceDetailsProps, useAnnonceDetails } from "./useAnnonceDetails";
import CarouselAnnonceDetails from "../../components/CarouselAnnonceDetails/CarouselAnnonceDetails";
import defaultUserPhoto from "../../assets/defaultUserPhoto.png";
import { SlideAnnonce } from "../../components/SlideAnnonce/SlideAnnonce";
import { FaCar, FaMotorcycle } from "react-icons/fa";
const AnnonceDetails: React.FC = (props: AnnonceDetailsProps) => {
  const {
    annonce,
    user,
    loading,
    error,
    selectedImage,
    displayNumber,
    annoncesSimilar,
    handleImageClick,
    handleDisplayNumber,
    sendMessage,
  } = useAnnonceDetails(props);

  if (loading || error) return null;

  if (!annonce || !user || !annoncesSimilar) return null;

  return (
    <section className="section">
      <h1 className="h1 md:hidden block my-4">{annonce.title}</h1>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div>
          <div className="w-full md:h-[420px] h-[300px] ">
            <img
              src={selectedImage?.imageUrl}
              alt={annonce.title + selectedImage?.imageId.toString()}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full ">
            <CarouselAnnonceDetails
              images={annonce.images}
              altText={annonce.title}
              handleImageClick={handleImageClick}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6  md:border-l-2 border-gray-200 pl-4">
          <h1 className="h1 md:block hidden">{annonce.title}</h1>
          <p className="text-gray-500">{annonce.vehicle.description}</p>
          <p className=" font-bold text-3xl ">
            <span className="text-black">Price :</span>{" "}
            <span className="text-blue-500">{annonce.price} </span> €
          </p>

          <div className="grid grid-cols-[40%_60%] gap-2">
            <div className="flex items-center gap-2 ">
              <img
                src={user.urlImageUser || defaultUserPhoto}
                alt={user.firstName || ""}
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
              <p className="text-gray-500 ">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={sendMessage}
                className="bg-slate-200 text-black px-4 py-2 rounded-md hover:bg-slate-300 transition-all duration-300 border-2 border-black"
              >
                envoyer un message
              </button>
              <button
                onClick={handleDisplayNumber}
                className="bg-slate-200 text-black px-4 py-2 rounded-md border-2 border-black"
              >
                {displayNumber ? annonce.phoneNumber : "Afficher le numéro"}
              </button>
            </div>
          </div>

          <p className="text-gray-500">
            <span className="font-bold text-black">Lieu de vente :</span>{" "}
            {annonce.city}
          </p>

          <hr className="border-2 border-gray-200 w-3/5 mx-auto" />

          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            <p className="text-gray-500">
              <span className="font-bold text-black">Kilométrage :</span>{" "}
              {annonce.vehicle.klmCounter} km
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Modèle :</span>{" "}
              {annonce.vehicle.model}
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Transmission :</span>{" "}
              {annonce.vehicle.gearbox}
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Condition :</span>{" "}
              {annonce.vehicle.condition}
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Carburant :</span>{" "}
              {annonce.vehicle.fuelType}
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 gap-4">
        <h2 className="h2">Notes</h2>
        <p className="text-gray-500">
          Si vous remarquez des éléments suspects ou frauduleux (prix
          anormalement bas, informations incohérentes, etc.), veuillez nous
          contacter immédiatement via notre service client pour signaler
          l'annonce. Votre sécurité est notre priorité.
        </p>
      </div>

      <div className="my-10">
        <SlideAnnonce
          sliderTitle="Articles similaires"
          data={annoncesSimilar}
          reactIcon={
            annonce.vehicle.type === "Voiture" ? (
              <FaCar className="mr-2" />
            ) : (
              <FaMotorcycle className="mr-2" />
            )
          }
          itsProductSimilar={true}
        />
      </div>
    </section>
  );
};

export default AnnonceDetails;
