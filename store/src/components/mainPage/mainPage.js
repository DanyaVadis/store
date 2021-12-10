import React from 'react';
import MainSlider from "./mainSlider";
import Catalogs from "./catalogs";
import CardsList from "../stock";
import ForDealer from "../forDealer";
import ForClient from "../forClient";
import News from "../news";

import classes from './mainPage.module.css';

const MainPage = props => {
    return (
        <div>
            <MainSlider />
            <Catalogs />
            <CardsList />
            <ForClient />
            <ForDealer />
            <News />
        </div>
    );
}

export default MainPage;