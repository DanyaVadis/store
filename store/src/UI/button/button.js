import React from 'react';
import classes from './button.module.css';
import { Link } from 'react-router-dom';
import useRenderClassesNames from '../../hooks/useRenderClassesNames';


const Button = ({ label, path = '/', style, children, classNames = [] }) => {
    const names = useRenderClassesNames(classNames, classes);
    return (
        <Link
            style={style}
            to={path}
            className={`${classes.btn} ${names.join(' ')}`}
        >
            {label || children}
        </Link>
    );
}

export default Button;