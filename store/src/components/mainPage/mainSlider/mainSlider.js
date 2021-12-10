import React from 'react';
import classes from './mainslider.module.css';
import block from './block.png';
import train from './train.png';
import Button from '../../../UI/button';


const MainSlider = props => {


    return (
        <div className={classes.slider}>
            <div className={classes.container}>
                <div
                    className={classes.slide}
                >
                    <div className={classes.text}>
                        <h1>
                            Уникальная <br />
                            <span className={classes.boldText}>Кардио-силовая тренировка </span><br />
                            <span className={classes.blackText}>2 в 1</span>
                        </h1>
                        <Button 
                            classNames={['white', 'hoverRed']}
                        >
                            Узнать больше
                        </Button>
                    </div>
                    <div className={classes.train}>
                        <img src={train} alt="" />
                    </div>
                </div>
                <div className={classes.block}>
                    <img src={block} alt="" />
                </div>
            </div>
        </div>
    );
}

export default MainSlider;