import React, { useRef } from 'react';
import classes from './header.module.css';
import ImgButton from '../../UI/imgButton';
import Catalog from './catalog';
import useCalcWidthBlock from '../../hooks/useCalcWidthBlock';

import catalog from './catalog.png';
import logo from './logo.png';

const Header = ({ changeActiveBurger, changeActiveOverlay, activeOverlay, activeCatalog, changeCatalog }) => {
    const targetRef = useRef();
    const width = useCalcWidthBlock(targetRef);
    console.log(width);
    return (
        <header className={classes.header}>
            <div className={classes.headerTop}>
                <div className={classes.container}>
                    <div ref={targetRef} className={classes.headerInner}>
                        <div
                            className={`${classes.iconMenu}`}
                            onClick={() => {
                                changeActiveOverlay(false);
                                changeCatalog(false);
                                changeActiveBurger(true);
                                document.body.style.cssText = `
                            left: 0px;
                            top: 0px;
                            position: fixed;
                            width: 100%;
                            overflow-y: scroll;
                            `;
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={classes.logo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={classes.catalog}>
                            <ImgButton
                                classNames={activeCatalog ? ['catalogArrow'] : []}
                                img={catalog}
                                styleImg={{
                                    width: '16px',
                                    height: '16px',
                                }}
                                onClick={() => {
                                    changeCatalog(!activeCatalog);
                                    changeActiveOverlay(!activeOverlay)
                                }}
                            >
                                Каталог
                            </ImgButton>
                            <Catalog
                                width={width}
                                activeCatalog={activeCatalog}
                            />
                        </div>
                        <div className={classes.search}>
                            <form>
                                <div className={classes.inputForm}>
                                    <input type="text" placeholder="Искать здесь..." />
                                    <button className={classes.searchBtn}></button>
                                </div>
                                <button className={classes.find} type="submit">Найти</button>
                            </form>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.likes}>
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g className={classes.likesSvg} opacity="0.7">
                                        <path d="M22.0718 1.96031C19.4616 -0.649176 15.2154 -0.649176 12.6059 1.96031L11.9998 2.56606L11.394 1.96031C8.78455 -0.64953 4.53795 -0.64953 1.92847 1.96031C-0.628032 4.51681 -0.644633 8.56914 1.88997 11.3867C4.2017 13.9555 11.0196 19.5054 11.3089 19.7403C11.5053 19.9 11.7416 19.9777 11.9765 19.9777C11.9842 19.9777 11.992 19.9777 11.9994 19.9773C12.2424 19.9886 12.4872 19.9053 12.6899 19.7403C12.9792 19.5054 19.7979 13.9555 22.1103 11.3863C24.6445 8.56914 24.6279 4.51681 22.0718 1.96031ZM20.535 9.96889C18.7326 11.9712 13.7782 16.1009 11.9994 17.5663C10.2207 16.1013 5.26732 11.9719 3.46527 9.96925C1.69712 8.00401 1.68052 5.20521 3.42677 3.45896C4.31861 2.56747 5.48984 2.12137 6.66107 2.12137C7.8323 2.12137 9.00354 2.56711 9.89538 3.45896L11.2277 4.79125C11.3863 4.94984 11.5862 5.0445 11.796 5.0777C12.1365 5.15081 12.5059 5.0558 12.7708 4.7916L14.1038 3.45896C15.8879 1.67562 18.7898 1.67598 20.5728 3.45896C22.319 5.20521 22.3024 8.00401 20.535 9.96889Z" fill="white" />
                                    </g>
                                </svg>
                                <div className={classes.likesIndicator}>5</div>
                            </div>
                            <div className={classes.cart}>
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g className={classes.cartSvg} opacity="0.7">
                                        <path d="M0.9 7.73325H20.1V21.4999C20.1 23.212 18.7121 24.5999 17 24.5999H4C2.28792 24.5999 0.9 23.212 0.9 21.4999V7.73325Z" stroke="white" strokeWidth="1.8" />
                                        <path d="M5.83464 12.6667L5.83464 5.00008C5.83464 2.79095 7.6255 1.00008 9.83464 1.00008H11.168C13.3771 1.00008 15.168 2.79094 15.168 5.00008L15.168 12.6667" stroke="white" strokeWidth="1.8" />
                                    </g>
                                </svg>
                                <div className={classes.cartIindicator}>8</div>
                            </div>
                            <div className={classes.account}>
                                <a className={classes.logIn} href="/">Войти</a>
                                <a className={classes.icon} href="/">
                                    <svg width="30" height="30" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.500977C4.47773 0.500977 0 4.97783 0 10.5005C0 16.0232 4.47729 20.5001 10 20.5001C15.5231 20.5001 20 16.0232 20 10.5005C20 4.97783 15.5231 0.500977 10 0.500977ZM10 3.49096C11.8273 3.49096 13.308 4.97212 13.308 6.79853C13.308 8.62537 11.8273 10.1061 10 10.1061C8.17359 10.1061 6.69288 8.62537 6.69288 6.79853C6.69288 4.97212 8.17359 3.49096 10 3.49096ZM9.9978 17.8857C8.17535 17.8857 6.50619 17.222 5.21875 16.1234C4.90512 15.8559 4.72415 15.4636 4.72415 15.0521C4.72415 13.1997 6.22332 11.7173 8.07608 11.7173H11.9248C13.778 11.7173 15.2715 13.1997 15.2715 15.0521C15.2715 15.4641 15.0914 15.8555 14.7773 16.123C13.4903 17.222 11.8207 17.8857 9.9978 17.8857Z" fill="#858FA4" fillOpacity="0.7" />
                                    </svg>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;