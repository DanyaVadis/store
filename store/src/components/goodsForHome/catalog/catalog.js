import React from 'react';
import classes from './catalog.module.css';
import CatalogItem from './catalogItem';
import Container from '../../container';

const Catalog = ({kind, categories, products, ...props}) => {
    const parentId = categories.filter(item => item.pathName === kind)[0].id;
    const items = categories.filter(item => item.parentId === parentId);
    
    const renderCatalog = items.map(item => {
        const {name, pathName, img, id } = item;
        const list = categories.filter(item => item.parentId === id);
        return (
            <CatalogItem
                title={name}
                img={img}
                list={list}
                path={`/${kind}/${pathName}/`}
                kind={kind}
            />
        )
    })
    return (
        <div className={classes.catalog}>
            <Container>
                <div className={classes.catalogInner}>
                    {
                        renderCatalog
                    }
                </div>
            </Container>
        </div>
    );
}

export default Catalog;