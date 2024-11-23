import "./Header.css";
import { useHeader, HeaderProps } from "./useHeader";
import { DropDawnType } from "../DropDawnType/DropDawnType";
import { FaEnvelope, FaPlus, FaUser } from "react-icons/fa";
import logo from "../../assets/vloco-normal.png";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { DropDawnNotiMSG } from "../DropDawnNotiMSG/DropDawnNotiMSG";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUserData } from "../../reducers/userReducer";

export const Header = (props: HeaderProps) => {
  const { voitureNav, motoNav, notifications, messages, isLoggedIn } =
    useHeader(props);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const data = useSelector(selectUserData);
  // console.log("data", data);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide  z-50">
      <div className="flex items-center gap-5 w-full justify-between">
        {/* hide logo on mobile */}
        <Link to="/" className="lg:block hidden" onClick={closeMenu}>
          <img src={logo} alt="logo" className="my-logo" />
        </Link>

        <div
          id="collapseMenu text-center "
          className={`${
            isMenuOpen ? "block" : "max-lg:hidden"
          }  lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          {/* drop down menu voiture moto  */}

          <ul
            className="lg:flex lg:ml-2  lg:gap-x-5 max-lg:space-y-3 max-lg:fixed
                     max-lg:bg-white max-lg:w-4/6 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0
                      max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50  items-center justify-center"
          >
            <li className="mb-6 hidden max-lg:block">
              {/* <a href="javascript:void(0)"><img src={logo} alt="logo" className='my-logo' />
                        </a> */}
              <span className="text-2xl font-bold">
                <Link to="/" onClick={closeMenu}>
                  {" "}
                  VLOCSO
                </Link>
              </span>
            </li>

            {/* button add new annonce */}
            {isLoggedIn && (
              <li className="max-lg:border-b max-lg:py-3 px-3 flex justify-center">
                <button
                  disabled
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <FaPlus className="mr-2" />
                  Add new annonce
                </button>
              </li>
            )}

            {/* drop down menu voiture */}
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                <DropDawnType
                  type={voitureNav.type}
                  to={voitureNav.to}
                  closeMenu={closeMenu}
                />
              </a>
            </li>
            {/* drop down menu moto */}
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                <DropDawnType
                  type={motoNav.type}
                  to={motoNav.to}
                  closeMenu={closeMenu}
                />
              </a>
            </li>
            {/* search bar */}

            <li className="max-lg:border-b max-lg:py-3 px-3 hidden lg:block">
              <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent rounded outline-none pr-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="cursor-pointer fill-gray-400"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3  lg:flex items-center gap-5 flex justify-between">
              {isLoggedIn && (
                <DropDawnNotiMSG
                  type="Notifications"
                  isLoggedIn={props.isLoggedIn}
                  data={notifications}
                  closeMenu={closeMenu}
                  icon={<IoMdNotifications size={31} />}
                />
              )}
              {isLoggedIn && (
                <DropDawnNotiMSG
                  isLoggedIn={props.isLoggedIn}
                  type="Messages"
                  data={messages}
                  closeMenu={closeMenu}
                  icon={<FaEnvelope size={26} />}
                />
              )}

              <Link
                to={props.isLoggedIn ? "/profil" : "/login"}
                onClick={closeMenu}
                className="hover:text-blue-500 cursor-pointer"
              >
                {" "}
                <FaUser size={26} />{" "}
              </Link>
            </li>
          </ul>
        </div>

        <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden ">
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* disable logo on mobile */}

        <Link to="/" className="lg:hidden" onClick={closeMenu}>
          <img src={logo} alt="logo" className="my-logo" />
        </Link>
      </div>

      <div className="w-full lg:hidden pt-6 px-4">
        <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full text-sm bg-transparent rounded outline-none pr-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="cursor-pointer fill-gray-400"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
