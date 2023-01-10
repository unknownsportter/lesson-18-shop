import React, { useContext } from 'react';
import MyContext from '../../MyContext';
import SortBy from '../SortBy/SortBy';
import FilterBy from '../FilterBy/FilterBy';
import './Nav.css';

const Nav = () => {
    const { ShopingCart } = useContext(MyContext);

    return (
        <nav className="product-filter">
            <h1>Products</h1>
            <ShopingCart />
            <SortBy />
            <FilterBy />
        </nav>
    );
};

export default Nav;
