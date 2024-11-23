import voiture1 from '../../assets/voiture1.jpeg' 
import moto from "../../assets/moto.jpg"   
import { marksMoto, marksVoiture } from '../../Dummy/data';
    export interface HomeProps {
        
    }

export const useHome = (props: HomeProps) => {
    const carouselItems = [
        { src: voiture1,
            alt: "Acheter ou louer ", title: "Accédez facilement à notre catalogue de voiture incroyable",
            buttonText: "Acheter ou louer maintenant",
            toDoFC: () => console.log('hello')

         },
        { src: moto, alt: "Location de moto", title: "Explorez aisément notre sélection exceptionnelle de motos", buttonText: "Découvrez maintenant", toDoFC: () => console.log('Location de moto') },
      ];
 

    //   const marks = [
    //     { id: '1', imageUrl: 'https://images.unsplash.com/photo-1517841905240-4729888e3b2e', altText: 'Image 1' },
    //     { id: '2', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', altText: 'Image 2' },
    //     { id: '3', imageUrl: 'https://images.unsplash.com/photo-1501594907352-4c1c1c1c1c1c', altText: 'Image 3' },
    //     { id: '4', imageUrl: 'https://images.unsplash.com/photo-1519995552020-1c1c1c1c1c1c', altText: 'Image 4' },
    //     { id: '5', imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664', altText: 'Image 5' },
    //   ];
    return {
        ...props ,carouselItems ,marksMoto , marksVoiture
    }
}