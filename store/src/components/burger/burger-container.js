import React from 'react';
import Burger from './burger';
import { useSelector } from 'react-redux';

const HeaderTopContainer = (props) => {
    const list = useSelector(state => state.headerNav.list)

    return (
        <Burger
            {...props}
            list={list}
        />
    );
}

export default HeaderTopContainer;