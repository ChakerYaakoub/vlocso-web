import { DataAnnonce } from "../../models/Annonce";

export interface ProductCardProps {
  item: DataAnnonce;
}
export const useProductCard = (props: ProductCardProps) => {
  return { ...props };
};
