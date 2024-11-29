import voiture1 from "../../assets/voiture1.jpeg";
import moto from "../../assets/moto.jpg";
import { marksMoto, marksVoiture } from "../../Dummy/data";
import { useServerError } from "../../context/ServerErrorContext";
import { useLoading } from "../../context/LoadingContext";
import { useEffect, useState } from "react";
import { AnnonceHome, DataAnnonce } from "../../models/Annonce";
import { fetchHomeData } from "./fetchHomeData";
import { useNavigate } from "react-router-dom";
export interface HomeProps {}

export const useHome = (props: HomeProps) => {
  const navigate = useNavigate();
  const { setLoading, loading } = useLoading();
  const { setError, error } = useServerError();
  const [data, setData] = useState<DataAnnonce[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
    console.log("isLoggedIn", isLoggedIn);
  }, [localStorage.getItem("accessToken"), isLoggedIn]);

  const carouselItems = [
    {
      src: voiture1,
      alt: "Acheter ou louer ",
      title: "Accédez facilement à notre catalogue de voiture incroyable",
      buttonText: "Acheter ou louer maintenant",
      toDoFC: () => console.log("hello"),
    },
    {
      src: moto,
      alt: "Location de moto",
      title: "Explorez aisément notre sélection exceptionnelle de motos",
      buttonText: "Découvrez maintenant",
      toDoFC: () => console.log("Location de moto"),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = (await fetchHomeData()) as AnnonceHome[];
        console.log("data", result);
        if (result) {
          //@ts-ignore
          setData(result.data);
        }
      } catch (error: any) {
        console.error("Error fetching annonce:", error);
        setError("Error fetching annonce");
      } finally {
        setLoading(false);
      }
    };

    if (!data || data.length === 0) {
      fetchData();
    }
  }, [data]); // Add `annonce` to dependencies

  // in unMount
  useEffect(() => {
    return () => {
      setLoading(false);
      setError("");
    };
  }, []);

  return {
    ...props,
    carouselItems,
    marksMoto,
    marksVoiture,
    data,
    loading,
    error,
    setError,
    navigate,
    isLoggedIn,
  };
};
