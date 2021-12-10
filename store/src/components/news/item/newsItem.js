import React from 'react';
import classes from './newsItem.module.css';

const NewsItem = ({ img, title, text, date, widthItem }) => {
    return (
        <div style={{ flex: `0 0 ${widthItem}px` }} className={classes.sliderItem}>
            <img className={classes.image} src={img} alt="" />
            <div className={classes.content}>
                <p className={classes.title}>
                    {title}
                </p>
                <p className={classes.text}>
                    {text}
                </p>
                <p className={classes.date}>
                    {date}
                </p>
            </div>
        </div>
    )
}

export default NewsItem;