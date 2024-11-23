import { useNavigate } from "react-router-dom";

export interface MesAnnoncesProps {}

export const useMesAnnonces = (props: MesAnnoncesProps) => {
  const navigate = useNavigate();

  const handleNavigate = (type: "create-annonce" | "relaunch-annonce") => {
    navigate(type);
  };

  return { ...props, handleNavigate };
};
