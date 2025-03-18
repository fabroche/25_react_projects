import React from 'react';
import './TabHeading.css';

function TabHeading({tab, index, handleOnClick, isSelected}) {
    return (
        <div
            className={`TabHeading ${isSelected ? 'active' : ''}`}
            key={tab.label}
            onClick={() => handleOnClick(index)}
        >
            <span className="label">{tab.label}</span>
        </div>
    );
}

export default TabHeading;