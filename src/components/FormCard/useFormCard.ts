export interface FormCardProps {
  children: React.ReactNode;
  width? : string
  inlineStyle?: React.CSSProperties

}

export const useFormCard = (props: FormCardProps) => {


  return { ...props };
};
