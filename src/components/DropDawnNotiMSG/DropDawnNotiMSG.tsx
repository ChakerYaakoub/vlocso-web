import { Link } from "react-router-dom";
import "./DropDawnNotiMSG.css";
import { useDropDawnNotiMSG, DropDawnNotiMSGProps } from "./useDropDawnNotiMSG";
import { useState, useEffect, useRef } from "react";
import { Notification } from "../../models/Notification";
import { Message } from "../../models/Message";
import { TbMessageCircleUser } from "react-icons/tb";

export const DropDawnNotiMSG = (props: DropDawnNotiMSGProps) => {
  const { type, data, icon, closeMenu, navigate, isLoggedIn } =
    useDropDawnNotiMSG(props);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  //   if (!isLoggedIn) return null;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderItem = (item: Notification | Message) => {
    console.log(item);
    if (data.length === 0) return null;
    const isNotification = "global" in item;
    return (
      <div className="p-4 border-b relative ">
        {isNotification && (
          <h3 className="font-semibold mb-2 mt-2">{item.title}</h3>
        )}
        <div className="flex items-start">
          {isNotification && (
            <img
              src={item.url_image}
              alt="Notification"
              className="w-14 m-auto aspect-square mr-4"
            />
          )}
          <div className="flex-grow pt-2 ">
            <div className="">
              {!isNotification && (
                <>
                  <div className="flex gap-2 align-center">
                    <TbMessageCircleUser color="blue" size={20} /> {item.from}
                  </div>
                  <p className="font-bold pb-2">{item.annonce_title}</p>
                </>
              )}
              <span className="text-xs text-gray-500 absolute right-1 top-2">
                {new Date(item.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600 ">{item.content}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="mt-2 text-sm text-blue-500 hover:text-blue-700 "
            onClick={() => {
              closeMenu();
              navigate(
                `./${isNotification ? "notification" : "message"}/${
                  isNotification ? item.notification_id : item.message_id
                }`
              );
            }}
          >
            View {isNotification ? "Notification" : "Message"}
          </button>
        </div>
      </div>
    );
  };

  const isNotification = data.length > 0 && "global" in data[0];

  return (
    <div className="relative " ref={dropdownRef}>
      <button onClick={toggleDropdown} type="button">
        <div className="relative p-2 border rounded-full">
          <span className="absolute -top-1 text-xs -right-0 bg-red-500 text-white rounded-full px-1">
            {data.length}
          </span>
          {icon}
        </div>
      </button>
      {/* max-lg:${isNotification? '-left-28':'left-10' } */}

      {isOpen && (
        <div
          className={`absolute  ${
            isNotification ? "-left-5" : "-left-32"
          } lg:left-auto lg:right-0  z-[100] mt-2 bg-white 
                 divide-y divide-gray-100 rounded-lg shadow lg:w-80 max-lg:w-64 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <div className="relative">
            <h1 className="text-lg font-semibold p-2">{type}</h1>
            <button
              onClick={toggleDropdown}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {data.length > 0 ? (
            <>
              <div className="max-h-96 overflow-y-auto">
                {data.map((item, index) => (
                  <div key={index}>{renderItem(item)}</div>
                ))}
              </div>
              <div className="p-2">
                <Link
                  to={`/${type.toLowerCase()}`}
                  onClick={() => {
                    closeMenu();
                    toggleDropdown();
                  }}
                  className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View All {type}
                </Link>
              </div>
            </>
          ) : (
            <div className="p-2 text-center">No {type}</div>
          )}
        </div>
      )}
    </div>
  );
};
