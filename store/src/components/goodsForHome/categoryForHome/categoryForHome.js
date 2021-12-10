import React, { useState, useEffect } from 'react';
import classes from './categoryForHome.module.css';
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, changeSubCategory, changePriceRange, changeManufacturersFilte, changePriceFilter } from '../../../actions/products';

import ContentHeader from '../../contentHeader';
import ScrollToTopOnMount from '../../../utils/ScrollToTopOnMount';
import Cards from './cards';
import Container from '../../container';
import Pagination from '../../pagination';


const CategoryForHome = ({ products, categories, manufacturers, ...props }) => {
    let { kind, category, subCategory } = useParams();
    const dispatch = useDispatch();
    const {min, max} = useSelector(state => state.products.priceRange);
    const items = useSelector(state => state.products.filteredItems);
    const priceFilter = useSelector(state => state.products.priceFilter);

    useEffect(() => {
        dispatch(changeSubCategory(categories, subCategory))
        dispatch(changePriceRange());
        dispatch(filterProducts(categories, category));
    }, [subCategory, categories, dispatch])

    
    function changePriceFilterFunc(filter) {
        dispatch(changePriceFilter(filter));
        dispatch(changePriceRange());
        dispatch(filterProducts(categories, category));
    }

    function setManufacturers(idManufacturer) {
        dispatch(changeManufacturersFilte(idManufacturer))
        dispatch(changePriceRange());
        dispatch(filterProducts(categories, category));
    }

    let path = [
        {
            title: categories.filter(item => item.pathName === kind)[0].name,
            path: `/${categories.filter(item => item.pathName === kind)[0].pathName}/`
        },
        {
            title: categories.filter(item => item.pathName === category)[0].name,
            path: `${category}/`
        },
    ];
    let subCategoryName;
    let categoryName = categories.filter(item => item.pathName === category)[0].name;

    const parentId = categories.filter(item => item.pathName === category)[0].id;
    const categoriesName = categories.filter(item => item.parentId === parentId);


    if (subCategory) {
        path.push({ title: categories.filter(item => item.pathName === subCategory)[0].name });
    }

    return (
        <div className={classes.categoryForHome}>
            <ScrollToTopOnMount />

            <ContentHeader
                path={path}
            >
                {subCategoryName || categoryName}
            </ContentHeader>

            <Container>
                <div className={classes.btnWrapper}>
                    {
                        categoriesName.map(item => {
                            return (
                                <NavLink
                                    activeClassName={classes.active}
                                    to={`/${kind}/${category}/${item.pathName}/`}
                                    className={classes.subCategoryBtn}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
                <Pagination
                    items={items}
                >
                    <Cards
                        priceFilter={priceFilter}
                        changePriceFilter={changePriceFilterFunc}
                        manufacturers={manufacturers}
                        setManufacturers={setManufacturers}
                        minPriceProduct={min}
                        maxPriceProduct={max}
                    />
                </Pagination>
            </Container>
        </div>
    );
}

export default CategoryForHome;