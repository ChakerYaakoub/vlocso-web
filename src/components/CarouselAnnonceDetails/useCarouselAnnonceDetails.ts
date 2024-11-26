import { Image } from "../../models/Image";

export interface CarouselAnnonceDetailsProps {
  images: Image[];
  altText: string;
  handleImageClick: (image: Image) => void;
}

export const useCarouselAnnonceDetails = (
  props: CarouselAnnonceDetailsProps
) => {
  return { ...props };
};
