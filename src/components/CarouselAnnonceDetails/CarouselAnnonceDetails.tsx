import React from "react";
import "./CarouselAnnonceDetails.css";
import {
  CarouselAnnonceDetailsProps,
  useCarouselAnnonceDetails,
} from "./useCarouselAnnonceDetails";
import { Carousel } from "react-responsive-carousel";

const CarouselAnnonceDetails: React.FC<CarouselAnnonceDetailsProps> = (
  props: CarouselAnnonceDetailsProps
) => {
  const { images, altText, handleImageClick } =
    useCarouselAnnonceDetails(props);

  // Calculate centerSlidePercentage based on number of images

  return (
    <div id={"carouselDetailsAnnonce"}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={images.length > 4}
        infiniteLoop={false}
        useKeyboardArrows={false}
        autoPlay={false}
        centerMode={true}
        centerSlidePercentage={25}
        className=" border  border-gray-100 rounded-lg p-2 mt-2"
        showArrows={images.length > 4}
      >
        {images.map((image) => (
          <div
            key={image.imageId}
            className="md:h-38 h-24  cursor-pointer   mx-2"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.imageUrl}
              alt={altText + image.imageId.toString()}
              className=" h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselAnnonceDetails;
