import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAnnonceById, fetchAnnonceSimilar } from "./fetchAnnonceById";
import { useLoading } from "../../context/LoadingContext";
import { useServerError } from "../../context/ServerErrorContext";
import {
  AnnonceById,
  AnnonceByIdResponse,
  DataAnnonce,
} from "../../models/Annonce";
import { User } from "../../models/User";
import { Image } from "../../models/Image";

export interface AnnonceDetailsProps {}
// http://localhost:5173/annonce-details/9
export const useAnnonceDetails = (props: AnnonceDetailsProps) => {
  const { id } = useParams();
  // @ts-ignore
  const [data, setData] = useState<AnnonceByIdResponse | null>(null);
  const [annonce, setAnnonce] = useState<AnnonceById | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { setLoading, loading } = useLoading();
  const { setError, error } = useServerError();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [displayNumber, setDisplayNumber] = useState(false);
  const [annoncesSimilar, setAnnoncesSimilar] = useState<DataAnnonce[]>([]);

  const handleDisplayNumber = () => {
    setDisplayNumber(!displayNumber);
  };

  const sendMessage = () => {
    console.log("sendMessage");
  };

  useEffect(() => {
    const fetchAnnonceData = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await fetchAnnonceById(id);
        console.log("data", data);
        setData(data);
        setAnnonce(data.data.annonce);
        setUser(data.data.user);
      } catch (error: any) {
        console.error("Error fetching annonce:", error);
        setError("Error fetching annonce");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnonceData();
  }, [id, setLoading, setError]);

  useEffect(() => {
    const fetchSimilarAnnonces = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const annoncesSimilar = await fetchAnnonceSimilar(id);
        console.log("similar annonces", annoncesSimilar);
        if (annoncesSimilar) {
          //@ts-ignore
          setAnnoncesSimilar(annoncesSimilar.data);
        }
      } catch (error: any) {
        console.error("Error fetching similar annonces:", error);
        setError("Error fetching similar annonces");
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarAnnonces();
  }, [id, setLoading, setError]);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    console.log("selectedImage", selectedImage);
  };

  useEffect(() => {
    if (annonce) {
      setSelectedImage(annonce.images[0]);
    }
  }, [annonce]);

  return {
    ...props,
    annonce,
    user,
    loading,
    error,
    selectedImage,
    handleImageClick,
    displayNumber,
    handleDisplayNumber,
    sendMessage,
    annoncesSimilar,
  };
};
