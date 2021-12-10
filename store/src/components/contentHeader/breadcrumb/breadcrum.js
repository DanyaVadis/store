import React from 'react';
import classes from './breadcrum.module.css';
import { Link } from 'react-router-dom';

const Breadcrum = ({ items = [], style }) => {
    let path = '';
    return (
        <nav className={classes.breadcrumb} style={style}>
            <ul className={classes.list}>
                <li className={`${classes.home}`}>
                    <Link to="/">
                        <svg width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.svg} d="M14.6896 7.87711L7.87425 0.664272C7.82518 0.612198 7.76689 0.570885 7.70273 0.542697C7.63856 0.514509 7.56978 0.5 7.50031 0.5C7.43084 0.5 7.36206 0.514509 7.29789 0.542697C7.23373 0.570885 7.17544 0.612198 7.12637 0.664272L0.311065 7.87711C0.112513 8.08739 0 8.37303 0 8.67094C0 9.28953 0.474871 9.79247 1.05895 9.79247H1.77704V14.9392C1.77704 15.2494 2.01365 15.5 2.30652 15.5H6.44136V11.5746H8.29452V15.5H12.6941C12.987 15.5 13.2236 15.2494 13.2236 14.9392V9.79247H13.9417C14.223 9.79247 14.4927 9.67506 14.6912 9.46302C15.1032 9.02492 15.1032 8.3152 14.6896 7.87711Z" fill="#B9C0CF" />
                        </svg>
                    </Link>
                </li>
                {
                    items.map((item, i) => {
                        path += item.path
                        return (
                            <li className={`${classes.item} ${i === items.length - 1 ? classes.inactive : ''}`}>
                                <Link to={path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Breadcrum;