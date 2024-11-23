// web/src/components/DropSelectItem/DropSelectItem.tsx

import React, { useState } from 'react';
import './DropSelectItem.css'; // Import CSS for animations

const DropSelectItem: React.FC<{ items: React.ReactNode[] }> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="drop-select">
            <button onClick={toggleDropdown}>Select Item</button>
            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                {items.map((item, index) => (
                    <div key={index} className="dropdown-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropSelectItem;

