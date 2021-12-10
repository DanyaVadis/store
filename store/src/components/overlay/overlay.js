import React from 'react';
import classes from './overlay.module.css';

const Overlay = ({active, func}) => {
    return (
        <div 
            className={`${classes.overlay} ${active ? classes.active : ''}`}
            onClick={() => {
                func();
            }}
        >

        </div>
    );
}

export default Overlay;