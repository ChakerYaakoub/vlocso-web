import React from 'react';
import './FormCard.css';
import { FormCardProps, useFormCard } from './useFormCard';

const FormCard: React.FC<FormCardProps> = (props) => {
  const { children, width = " w-11/12 md:w-3/4 lg:w-1/2 ", inlineStyle } = useFormCard(props);
  return <div className={`FormCard mx-auto p-4 md:p-10 rounded-lg ${width} relative`} style={inlineStyle}>

    {children}



  </div>;
};

export default FormCard;
