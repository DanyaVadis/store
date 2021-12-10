import React from 'react';
import { Link } from 'react-router-dom';
import classes from './catalogItem.module.css';

const CatalogItem = ({ img, title, list, path }) => {

    return (
        <div className={classes.catalogItem}>
            <Link className={classes.img}>
                <img src={img} alt="" />
            </Link>

            <div className={classes.content}>
                <Link 
                    className={classes.title}
                    to={path}
                >
                    {title}
                </Link>

                <ul className={classes.list}>
                    {
                        list.map(item => {
                            return (
                                <li className={classes.listItem}>
                                    <Link to={`${path}${item.pathName}/`}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    );
}

export default CatalogItem;