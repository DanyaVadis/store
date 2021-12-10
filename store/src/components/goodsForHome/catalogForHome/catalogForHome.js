import React from 'react';
import classes from './catalogForHome.module.css';
import CardsList from "../../stock";
import Catalog from '../catalog';
import ContentHeader from '../../contentHeader';
import ScrollToTopOnMount from '../../../utils/ScrollToTopOnMount';
import { useParams } from "react-router-dom";

const CatalogForHome = ({categories, products, ...props}) => {
    let { kind } = useParams();
    const path = [
        {
            title: categories.filter(item => item.pathName === kind)[0].name,
            path: `/${categories.filter(item => item.pathName === kind)[0].pathName}/`
        }
    ]
    return (
        <div className={classes.catalogForHome}>
            <ScrollToTopOnMount />
            <ContentHeader
                path={path}
            >
                {categories.filter(item => item.pathName === kind)[0].name}
            </ContentHeader>
            <Catalog
                kind={kind}
                categories={categories}
                products={products}
            />
            <CardsList />
        </div>
    );
}

export default CatalogForHome;