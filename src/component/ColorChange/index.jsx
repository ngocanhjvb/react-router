import React from 'react';
import './ColorChange.scss';
import useChangeColor from "../../customHook/useChangeColor";


const ColorChange = () => {

    const {color} = useChangeColor();

    return (
        <div>
            <div className="magic-box" style={{backgroundColor: color}}>
            </div>
        </div>
    );
};

export default ColorChange;
