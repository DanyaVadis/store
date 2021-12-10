import React from 'react';
import classes from './forClient.module.css';
import { Link } from 'react-router-dom';
import firstBlock from './firstBlock.png';
import secondBlock from './secondBlock.png';
import thirdBlock from './thirdBlock.png';
import fourthBlock from './fourthBlock.png';

const ForClient = props => {
    return (
        <div className={classes.forClient}>
            <div className={classes.container}>
                <div className={classes.clientBlock}>
                    <img className={classes.img} src={firstBlock} alt="" />
                    <p className={classes.title}>Помощь покупателю</p>
                    <p className={classes.text}>Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.</p>
                    <Link to="/" className={classes.link}>
                        Подробнее
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.554688 5.49998H8.44658M8.44658 5.49998L4.55469 1.44592M8.44658 5.49998L4.55469 9.55403" stroke="#FF818A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className={classes.clientBlock}>
                    <img className={classes.img} src={secondBlock} alt="" />
                    <p className={classes.title}>Заявка на сервис</p>
                    <p className={classes.text}>Оставьте заявку на проведение гарантийного и постгарантийного ремонта.</p>
                    <Link to="/"  className={classes.link}>
                        Оставить заявку
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.554688 5.49998H8.44658M8.44658 5.49998L4.55469 1.44592M8.44658 5.49998L4.55469 9.55403" stroke="#FF818A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className={classes.clientBlock}>
                    <img className={classes.img} src={thirdBlock} alt="" />
                    <p className={classes.title}>Личный кабинет партнера B2B</p>
                    <p className={classes.text}>Личный кабинет дилера с доступом к информационным материалам</p>
                    <Link to="/"  className={classes.link}>
                        Стать партнером
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.554688 5.49998H8.44658M8.44658 5.49998L4.55469 1.44592M8.44658 5.49998L4.55469 9.55403" stroke="#FF818A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className={classes.clientBlock}>
                    <img className={classes.img} src={fourthBlock} alt="" />
                    <p className={classes.title}>Помощь покупателю</p>
                    <p className={classes.text}>Оставьте заявку на посещение шоу-рума в Москве</p>
                    <Link to="/"  className={classes.link}>
                        Записаться
                        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.554688 5.49998H8.44658M8.44658 5.49998L4.55469 1.44592M8.44658 5.49998L4.55469 9.55403" stroke="#FF818A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForClient;