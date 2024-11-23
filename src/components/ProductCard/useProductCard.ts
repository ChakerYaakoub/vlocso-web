import { Annonce } from "../../models/Annonce"

export  interface ProductCardProps{
    item : Annonce
}
export const useProductCard =(props: ProductCardProps )=>{
    return {...props}
}