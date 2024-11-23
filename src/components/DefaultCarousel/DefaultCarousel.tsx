import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  buttonText: string;
  toDoFC: () => void;
}

interface DefaultCarouselProps {
  items: CarouselItem[];
}


const DefaultCarousel: React.FC<DefaultCarouselProps> = ({ items }) => {

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={item.src}
              alt={item.title}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            /> 
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center  pt-15">
                <center>   <h2 className="text-white font-bold md:text-3xl sm:text-sm m-auto ">{item.title}</h2></center>
            
            </div>
            <div className="absolute bottom-5 left-1/2  transform -translate-x-1/2 md:text-xl sm:text">
              <button className="px-4 py-2 bg-white text-black hover:bg-blue-500 rounded md:px-6 md:py-3 sm:px-3 sm:py-2 flex items-center justify-center gap-2 text-xs md:text-xl "
              onClick={item.toDoFC}
              >
              {item.buttonText} <IoIosArrowForward size={25}/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls positioned at the top right */}
      <div className="absolute top-0 right-0 z-30 flex space-x-2 p-4">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          onClick={handlePrev}
        >
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          onClick={handleNext}
        >
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default DefaultCarousel;
