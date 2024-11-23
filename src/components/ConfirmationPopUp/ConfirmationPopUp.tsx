import React from 'react';
import {
  ConfirmationPopUpProps,
  useConfirmationPopUp,
} from './useConfirmationPopUp';
import CLose from '../SVG/CLose';

const ConfirmationPopUp: React.FC<ConfirmationPopUpProps> = (props) => {
  const {
    text,
    show,
    confirmText,
    cancelText,
    colorConfirm,
    icon = null,
    fixPosition = '',
    modalRef,
    onConfirme,
    onClose,
  } = useConfirmationPopUp(props);
  const iconClass = `
  text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto
  ${colorConfirm === 'red' ? 'text-red-600' : ''}
  ${colorConfirm === 'blue' ? 'text-blue-600' : ''}
  ${colorConfirm === 'green' ? 'text-green-600' : ''}
  ${colorConfirm === 'yellow' ? 'text-yellow-600' : ''}
  ${colorConfirm === 'teal' ? 'text-teal-600' : ''}
`;
  if (!show) return null;

  return (
    <>
      <div
        id="deleteModal"
        aria-hidden="true"
        //pl-0 lg:pl-72.5
        className={`fixed inset-0 z-99999 flex justify-center items-center w-full h-full  bg-opacity-50 ${fixPosition} pl-0 lg:pl-72.5`}
        style={{ backgroundColor: '#000000a6' }}
        // onClick={onClose}
      >
        <div
          ref={modalRef} // Attach the ref to the modal content
          className="relative p-4 w-full max-w-md   md:h-auto"
        >
          <div className="relative p-4 text-center bg-white dark:bg-boxdark rounded-lg shadow dark:bg-gray-800 sm:p-5 ">
            <button
              type="button"
              className="text-gray-400 hover:text-zinc-700   absolute top-2.5 right-2.5 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={onClose}
            >
              <CLose />
              <span className="sr-only">Close modal</span>
            </button>

            <div
              className={`text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto ${iconClass}`}
            >
              {icon}
            </div>

            <p className="mb-4 text-gray-500 dark:text-gray-300">{text}</p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={onClose}
                type="button"
                className="py-2 px-3 text-sm font-small text-gray-500 bg-white 
                 rounded-lg border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300
                  hover:text-zinc-700  focus:z-10 dark:bg-gray-700 dark:text-black dark:border-gray-500 
                    dark:focus:ring-gray-600"
              >
                {cancelText || ' No, cancel'}
              </button>
              <button
                type="button"
                onClick={onConfirme}
                className={`
                  py-2 px-3 text-sm font-small text-center text-white rounded-lg
                  ${
                    colorConfirm === 'red'
                      ? 'bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'
                      : ''
                  }
                  ${
                    colorConfirm === 'blue'
                      ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900'
                      : ''
                  }
                  ${
                    colorConfirm === 'green'
                      ? 'bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900'
                      : ''
                  }
                  ${
                    colorConfirm === 'yellow'
                      ? 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-900'
                      : ''
                  }
                  ${
                    colorConfirm === 'teal'
                      ? 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-900'
                      : ''
                  }
                `}
              >
                {confirmText || "Yes, I'm sure"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPopUp;
