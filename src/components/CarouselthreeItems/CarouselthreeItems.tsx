import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import default carousel styles
import './CarouselthreeItems.css'; // Import custom styles
import { Link } from 'react-router-dom';

interface CarouselItem {
  id: string;
  imageUrl: string;
  altText: string;
}

interface ReusableCarouselProps {
  items: CarouselItem[];
}

const CarouselthreeItems: React.FC<ReusableCarouselProps> = ({ items }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage={33} // To show 3 items at once (each taking 33.33%)
      className='Mycarousel bg-gray-100 border border-gray-200 rounded-lg'






    >
      {items.map((item) => (
        <Link to={`/mark/${item.id}`}  >
          <div key={item.id} className=''>

            <img src={item.imageUrl} alt={item.altText} className='px-5 CarouselthreeItems-image ' />

          </div>
        </Link>
      ))}
    </Carousel>
  );
};


export default CarouselthreeItems;
