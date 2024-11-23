import React from 'react';
import './RelaunchAnnonce.css';
import { RelaunchAnnonceProps, useRelaunchAnnonce } from './useRelaunchAnnonce';

const RelaunchAnnonce: React.FC = (props: RelaunchAnnonceProps) => {
  const {  } = useRelaunchAnnonce(props);
  return <div>RelaunchAnnonce</div>;
};

export default RelaunchAnnonce;
