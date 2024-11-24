import React from "react";
import "./AnnonceDetails.css";
import { AnnonceDetailsProps, useAnnonceDetails } from "./useAnnonceDetails";

const AnnonceDetails: React.FC = (props: AnnonceDetailsProps) => {
  const { annonce, user, loading, error } = useAnnonceDetails(props);

  if (loading || error) return null;

  if (!annonce || !user) return null;

  return (
    <section className="section">
      <h1>{annonce.title}</h1>
    </section>
  );
};

export default AnnonceDetails;
