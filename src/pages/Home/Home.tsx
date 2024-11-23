import { TiWorld } from "react-icons/ti";
import CarouselthreeItems from "../../components/CarouselthreeItems/CarouselthreeItems";
import Carousel from "../../components/DefaultCarousel/DefaultCarousel";
import { SlideAnnonce } from "../../components/SlideAnnonce/SlideAnnonce";
import { dummyAnnonces } from "../../Dummy/data";
import "./Home.css";
import { useHome, HomeProps } from "./useHome";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const Home = (props: HomeProps) => {
  const { carouselItems, marksMoto, marksVoiture } = useHome(props);

  return (
    <div>
      {/* section 1  */}

      <section className="section">
        <Carousel items={carouselItems} />
      </section>

      {/* section 2  */}
      <section className="section">
        <div className="flex flex-wrap gap-5 w-full">
          <div className="w-full md:flex md:justify-between">
            <div className="w-full md:w-1/2">
              <h1 className=" h1">Marques de voitures</h1>
              <CarouselthreeItems items={marksVoiture} />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className=" h1">Marques de motos</h1>
              <CarouselthreeItems items={marksMoto} />
            </div>
          </div>
        </div>
      </section>

      {/* section Recommandations générale  */}

      <section className="section">
        <SlideAnnonce
          data={dummyAnnonces}
          sliderTitle="Recommandations générale"
          reactIcon={<TiWorld className="mr-2" />}
        />
      </section>
      {/* section Voitures */}

      <section className="section">
        <SlideAnnonce
          data={dummyAnnonces}
          sliderTitle="Voitures"
          reactIcon={<FaCar className="mr-2" />}
        />
      </section>
      {/* section Motos  */}

      <section className="section">
        <SlideAnnonce
          data={dummyAnnonces}
          sliderTitle="Motos"
          reactIcon={<FaMotorcycle className="mr-2" />}
        />
      </section>

      {/* sectgion Déposer une annonce  */}
      <section className="section">
        <div className="m-auto w-full md:w-4/6 plusAnnonceDiv py-10 px-4 flex flex-col justify-center items-center">
          <p className="text-lg sm:text-3xl w-full mb-4 text-center">
            Vendez ou louez dès maintenant
          </p>
          <button className="plusAnnonce flex justify-center items-center p-2 py-4">
            Déposer une annonce <FaPlus size={25} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};
