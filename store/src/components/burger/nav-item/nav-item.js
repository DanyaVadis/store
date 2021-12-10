import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav-item.module.css';

const NavItem = ({ path, label, children }) => {
    return (
        <li className={classes.navItem}>
            <NavLink to={path} >
                {label || children}
            </NavLink>
        </li>
    )
}

export default NavItem;