import React from 'react';
import classes from './category.module.css';

const Category = ({ img, title, high, wide, titleColor, titleClass }) => {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={`
                ${classes.gridItem} 
                ${high ? classes.high : ''}
                ${wide ? classes.wide : ''}
            `}
        >
            <div 
                style={{ color: `${titleColor ? titleColor : null}` }} 
                className={
                    titleClass === 'home' ? classes.homeTitle : classes.clubTitle
                }
            >
                {title}
            </div>
        </div>
    )
}

export default Category;