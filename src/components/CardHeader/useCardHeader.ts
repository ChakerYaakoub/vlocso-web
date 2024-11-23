import { useNavigate } from "react-router-dom";

export interface CardHeaderProps {
  backPageText:string
  title:string
  backFc?:()=>void
  otherButton?:React.ReactNode
}

export const useCardHeader = (props: CardHeaderProps) => {

  const navigate = useNavigate()


  return { ...props ,navigate };
};
