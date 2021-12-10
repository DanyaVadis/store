import React from 'react';
import GoodsForHome from './goodsForHome';
import { useSelector } from 'react-redux';

const GoodsContainer = props => {
    const products = useSelector(state => state.products.products)
    const categories = useSelector(state => state.categories.categories);
    const manufacturers = useSelector(state => state.manufacturers.manufacturers);
    return (
        <GoodsForHome
            products={products}
            categories={categories}
            manufacturers={manufacturers}
        />
    );
}

export default GoodsContainer;