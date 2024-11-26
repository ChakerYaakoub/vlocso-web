import { useEffect, useState } from "react";
import { DataAnnonce } from "../../models/Annonce";

export interface SlideAnnonceProps {
  sliderTitle: string;
  data: DataAnnonce[];
  reactIcon?: React.ReactNode;
  itsProductSimilar?: boolean;
}

export const useSlideAnnonce = (props: SlideAnnonceProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(
    props.itsProductSimilar
      ? window.innerWidth > 992
        ? 4
        : window.innerWidth > 480
        ? 3
        : 2
      : window.innerWidth > 992
      ? 8
      : window.innerWidth > 480
      ? 6
      : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(
        window.innerWidth > 992 ? 8 : window.innerWidth > 480 ? 6 : 4
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the start and end index for the visible products
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Create a slice of the data array based on the current page
  const visibleProducts = props.data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

  // Handlers to change pages
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    ...props,
    currentPage,
    itemsPerPage,
    totalPages,
    visibleProducts,
    prevPage,
    nextPage,
  };
};
