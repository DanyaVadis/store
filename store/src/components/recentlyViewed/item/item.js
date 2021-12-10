import React from 'react';
import classes from './item.module.css';
import { Link } from 'react-router-dom';
import Rating from '../../rating';

const RecentlyViewedItem = ({ img, title, rating, price, oldPrice, widthItem }) => {
    return (
        <div style={{ width: `${widthItem}px` }} className={classes.item}>
            <div className={classes.itemInner}>
                <Link><img className={classes.img} src={img} alt="" /></Link>
                <div className={classes.content}>
                    <Link className={classes.title}>{title}</Link>
                    <Rating
                        style={{ marginBottom: '3px' }}
                        rating={rating}
                    />
                    <div className={classes.buy}>
                        <div className={classes.price}>
                            <div className={classes.oldPrice}>
                                {oldPrice}
                            </div>
                            <div className={classes.newPrice}>
                                {price}
                            </div>
                        </div>
                        <svg className={classes.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.9 7.1381H19.9571V19C19.9571 20.7121 18.5692 22.1 16.8571 22.1H6C4.28792 22.1 2.9 20.7121 2.9 19V7.1381Z" stroke="#F53B49" strokeWidth="1.8"  />
                            <path d="M7.23624 11.4761V4.99988C7.23624 2.79074 9.0271 0.999884 11.2362 0.999884H11.6172C13.8263 0.999884 15.6172 2.79074 15.6172 4.99988V11.4761" stroke="#F53B49" strokeWidth="1.8" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentlyViewedItem;