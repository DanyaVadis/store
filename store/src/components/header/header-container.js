import React from 'react';
import Header from './header';
import { useSelector } from 'react-redux';

const HeaderContainer = (props) => {
    const list = useSelector(state => state.headerNav.list)
    return (
        <Header 
            {...props}
            list={list}
        />
    );
}

export default HeaderContainer;