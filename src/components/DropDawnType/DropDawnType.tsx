import { Link } from "react-router-dom";
import "./DropDawnType.css"
import { useDropDawnType, DropDawnTypeProps } from "./useDropDawnType"
import { useState, useEffect, useRef } from "react";

export const DropDawnType = (props: DropDawnTypeProps) => {
    const { type, to , closeMenu } = useDropDawnType(props);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            
            <button 
                onClick={toggleDropdown}
                className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" 
                type="button"
            >
                <span className="sr-only">Open user menu</span>
                {type}
                <svg className={`w-2.5 h-2.5 ms-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
      
            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {to.map((item, index) => (
                            <li key={index}>
                                <Link to={`/${item.toLowerCase()}`} onClick={() => { closeDropdown(); closeMenu(); }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}