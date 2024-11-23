export interface DropDawnTypeProps {
    type: string;
    to: string[];
    closeMenu: () => void;
}

export const useDropDawnType = (props: DropDawnTypeProps) => {
  
    return { ...props};
}