import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAnnonceById } from "./fetchAnnonceById";
import { useLoading } from "../../context/LoadingContext";
import { useServerError } from "../../context/ServerErrorContext";
import { Annonce, AnnonceByIdResponse } from "../../models/Annonce";
import { User } from "../../models/User";

export interface AnnonceDetailsProps {}

export const useAnnonceDetails = (props: AnnonceDetailsProps) => {
  const { id } = useParams();
  const [data, setData] = useState<AnnonceByIdResponse | null>(null);
  const [annonce, setAnnonce] = useState<Annonce | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { setLoading, loading } = useLoading();
  const { setError, error } = useServerError();
  // http://localhost:5173/annonce-details/9
  useEffect(() => {
    const fetchData = async () => {
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

    if (!data) {
      fetchData();
    }
  }, [id, setLoading, setError, data]); // Add `annonce` to dependencies

  return { ...props, annonce, user, loading, error };
};
