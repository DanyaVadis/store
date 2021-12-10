import React from 'react';
import classes from './chips.module.css';
import arrow from './arrow.svg';

const Chips = ({ titles, activeLink, changeActiveLink, style }) => {
    return (
        <div 
            style={style}
            className={classes.chips}
        >
            <select style={{ backgroundImage: `url(${arrow})` }} className={classes.smallChips}>
                {
                    titles.map((title, index) => {
                        return (
                            <option key={title+index} values={index}>{title}</option>
                        )
                    })
                }
            </select>

            <ul className={classes.bigchips}>
                {
                    titles.map((title, index) => {
                        return (
                            <li 
                                key={title+index}
                                className={`${classes.chipsItem} ${activeLink === index+1 ? classes.active: ''}`}
                                onClick={() => changeActiveLink(index+1)}
                            >
                                <button>{title}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Chips;