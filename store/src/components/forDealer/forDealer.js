import React from 'react';
import classes from './forDealer.module.css';
import img from './img.png';
import Button from '../../UI/button';

const ForDealer = props => {
    return (
        <div className={classes.forDealer}>
            <div className={classes.container}>
                <img className={classes.dealerImg} src={img} alt="" />
                <div className={classes.dealerText}>
                    <p className={classes.text}>
                        Станьте нашим партнером <span>и получите возможность</span> представлять нашу продукцию в вашем регионе.
                    </p>
                    <Button
                        classNames={['white']}
                    >
                        Стать партнером
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ForDealer;