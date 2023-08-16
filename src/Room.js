import React from 'react';
import './light.css';

function Room({ name, light, toggle }) {
    console.log(name, light);
    return (
        <div className="box">
            <button 
                className={ light ? "on" : "off" }
                onClick={toggle}
            >
                { name }
            </button>
        </div>
    );
}

export default React.memo(Room);