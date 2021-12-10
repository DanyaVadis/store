import React, { useState } from "react";
import classes from './app.module.css';
import { Route } from "react-router-dom";

import Header from "../header";
import Burger from "../burger";
import Overlay from '../overlay';
import Footer from "../footer";
import MainPage from "../mainPage";
import GoodsForHome from "../goodsForHome";


const App = props => {
    const [activeOverlay, setActiveOverlay] = useState(false);
    const [activeCatalog, setActiveCatalog] = useState(false);
    const [activeBurger, setActiveBurger] = useState(false);

    const changeActiveBurger = (value) => {
        setActiveBurger(value);
    }

    const overlayHandler = () => {
        setActiveOverlay(false);
        setActiveCatalog(false);
        setActiveBurger(false);
        document.body.style.overflow = "";
    }

    const changeCatalog = (state) => {
        setActiveCatalog(state);
    }
    const changeActiveOverlay = (value) => {
        setActiveOverlay(value);
    }
    return (
        <div className={classes.wrapper}>
            <Header
                changeActiveBurger={changeActiveBurger}
                changeCatalog={changeCatalog}
                activeCatalog={activeCatalog}
                changeActiveOverlay={changeActiveOverlay}
                activeOverlay={activeOverlay}
            />
            <Burger
                activeBurger={activeBurger}
                changeActiveBurger={changeActiveBurger}
                changeActiveOverlay={changeActiveOverlay}
                activeOverlay={activeOverlay}
            />
            <Overlay
                active={activeOverlay}
                func={overlayHandler}
            />

            <div className={classes.content}>
                <Route exact path="/" render={() => <MainPage />} />
                <Route path="/:kind" render={() => <GoodsForHome />} />
            </div>

            <Footer />
        </div>
    );
}

export default App;