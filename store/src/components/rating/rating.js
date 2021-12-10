import React from 'react';
import classes from './rating.module.css'

const Rating = ({ rating, style }) => {
    return (
        <div style={style} className={classes.rating}>
            <div className={classes.ratingTitle}>
                Рейтинг
            </div>
            <div className={classes.ratingBody}>
                <div
                    style={{
                        width: `${rating * 20}%`
                    }}
                    className={classes.ratingActive}
                ></div>
                <div className={classes.ratingItems}>
                    <input className={classes.ratingItem} type="radio" name="rating" value="1" />
                    <input className={classes.ratingItem} type="radio" name="rating" value="2" />
                    <input className={classes.ratingItem} type="radio" name="rating" value="3" />
                    <input className={classes.ratingItem} type="radio" name="rating" value="4" />
                    <input className={classes.ratingItem} type="radio" name="rating" value="5" />
                </div>
            </div>
        </div>
    );
}

export default Rating;