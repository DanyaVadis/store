import React from 'react';
import classes from './contentHeader.module.css';
import Container from '../container';
import Breadcrum from './breadcrumb';

const ContentHeader = ({title, path, children}) => {
    return (
        <div className={classes.contentHeader}>
            <Container>
                <Breadcrum
                    items={path}
                />
                <h1 className={classes.title}>{children || title}</h1>
            </Container>
        </div>
    );
}

export default ContentHeader;