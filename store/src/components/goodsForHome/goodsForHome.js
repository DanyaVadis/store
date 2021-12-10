import React from 'react';
import classes from './goodsForHome.module.css';
import { Route, Switch, useParams } from "react-router-dom";

import RecentlyViewed from '../recentlyViewed';
import CatalogForHome from './catalogForHome';
import CategoryForHome from './categoryForHome';

const GoodsForHome = ({categories, products, manufacturers, ...props}) => {
    
    return (
        <div className={classes.goodsForHome}>
            <Switch>
                <Route exact path="/:kind" render={() => {
                    return (
                        <CatalogForHome 
                            products={products} 
                            categories={categories}
                        />
                    )
                }}/>
                <Route path="/:kind/:category/:subCategory?" render={() => {
                    return (
                        <CategoryForHome 
                            products={products} 
                            categories={categories}
                            manufacturers={manufacturers}
                        />
                    )
                }} />
            </Switch>
            <RecentlyViewed />
        </div>
    );
}

export default GoodsForHome;