import React, { ReactNode, useEffect, useRef } from 'react';

interface PopupProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions: { label: string; onClick: () => void; sx: string }[];
}

const Popup: React.FC<PopupProps> = ({
  show,
  onClose,
  title,
  children,
  actions,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // Call the onClose function
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-99999  bg-opacity-50 pl-0 lg:pl-72.5"
      // pl-0 lg:pl-72.5
      style={{ backgroundColor: '#000000a6' }}
      // onClick={onClose}
    >
      <div
        className="bg-white dark:bg-boxdark pt-6  rounded-md shadow-md  md:w-90 w-11/12 flex flex-col items-center"
        ref={modalRef} // Attach the ref to the modal content
      >
        <h2 className="text-xl font-semibold mb-4 text-center w-full capitalize">
          {title}
        </h2>
        <div className=" text-center w-full">{children}</div>
        <div className="flex flex-col w-full items-center capitalize">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`${action.sx}`}
              style={{
                borderBottom: '0',
                borderLeft: '0',
                borderRight: '0',
                borderTop: '1px solid #dbdbdb',
                width: '100%',
                padding: '0.5rem ',
              }}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
        <button
          className="text-gray-700 "
          style={{
            borderBottom: '0',
            borderLeft: '0',
            borderRight: '0',
            borderTop: '1px solid #dbdbdb',
            width: '100%',
            padding: '0.5rem ',
          }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
