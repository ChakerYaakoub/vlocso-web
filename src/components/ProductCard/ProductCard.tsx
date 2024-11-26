import { ProductCardProps, useProductCard } from "./useProductCard";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import defaultImageTest from "../../assets/defaultImageTest.jpg";

export const ProductCard: React.FC<ProductCardProps> = (
  props: ProductCardProps
) => {
  const { item } = useProductCard(props);
  const imageUrl = item.annonce.images[0]?.imageUrl ?? defaultImageTest;
  return (
    <div className="w-full max-w-xs bg-white  rounded-lg  ">
      <Link to={`/annonce-details/${item.annonce.annonceId}`}>
        <img
          className="p-1 rounded-t-lg  imageAnnonce m-auto rounded-lg"
          src={imageUrl}
          alt="product image"
        />
      </Link>
      <div className="p-3   gap-2">
        <Link to={`/annonce-details/${item.annonce.annonceId}`}>
          <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white ">
            {item.annonce.title}
          </h5>
        </Link>

        <span className="border-2 mr-2 border-gray-100 rounded-full inline-block px-3 mt-3 text-sm">
          {item.annonce.vehicle.condition}
        </span>
        <span className="mt-1 priceColor text-sm  mr-2 ">
          {item.annonce.price} €
        </span>

        <span className="mt-1 location text-xs ">
          {item.annonce.country} , {item.annonce.city}
        </span>
      </div>
    </div>
  );
};
