import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface ToTopProps {}

export const useToTop = (props: ToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    const appElement = document.getElementById("App");
    if (appElement) {
      appElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return { ...props };
};
