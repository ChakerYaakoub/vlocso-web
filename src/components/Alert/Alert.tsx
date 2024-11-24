import { AlertProps, useAlert } from './useAlert';
import './Alert.css';
import { FaWindowClose } from 'react-icons/fa';
// @toString
import { Alert as AlertMaterial, AlertTitle } from '@mui/material';

const Alert = (props: AlertProps) => {
  const { title, message, type, handleClose, variant } = useAlert(props);
  // Define the classes based on the type of alert

  return (
    <div id="myAlert">
      {/*  @ts-ignore */}
      <AlertMaterial variant={variant} severity={type}>
        {title && <AlertTitle>{title}</AlertTitle>}
        <button className="ToClose" onClick={handleClose}>
          <FaWindowClose />
        </button>
        {message && <>{message}</>}
      </AlertMaterial>
    </div>
  );
};

export default Alert;
