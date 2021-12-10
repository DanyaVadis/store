import React from 'react';
import classes from './imgButton.module.css';
import useRenderClassesNames from '../../hooks/useRenderClassesNames';

const ImgButton = ({ label, onClick, style, imgStyle, children, img, classNames = [] }) => {
    const names = useRenderClassesNames(classNames, classes)
    return (
        <button
            onClick={() => onClick()}
            className={`${classes.btn} ${names.join(' ')}`}
            style={style}
        >
            <img style={imgStyle} src={img} alt="" />
            {label || children}
        </button>
    );
}

export default ImgButton;