import { ProductCardProps, useProductCard } from "./useProductCard";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard: React.FC<ProductCardProps> = (
  props: ProductCardProps
) => {
  const { item } = useProductCard(props);
  return (
    <div className="w-full max-w-xs bg-white  rounded-lg  ">
      <Link to={`/product-detail/${item.annonceId}`}>
        <img
          className="p-1 rounded-t-lg  imageAnnonce m-auto rounded-lg"
          src={item.images[0].image_url}
          alt="product image"
        />
      </Link>
      <div className="p-3">
        <Link to={`/product-detail/${item.annonceId}`}>
          <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white ">
            {item.title}
          </h5>
        </Link>

        <span className="border-2 border-gray-100 rounded-full inline-block px-3 mt-3 text-sm">
          {item.annonceState}
        </span>
        <span className="mt-1 priceColor text-sm ">{item.price}</span>

        <span className="mt-1 location text-xs ">
          {item.country} , {item.city}
        </span>
      </div>
    </div>
  );
};
