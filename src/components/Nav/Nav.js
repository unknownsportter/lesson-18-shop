import React, { useContext } from 'react';
import SortBy from '../SortBy/SortBy';
import FilterBy from '../FilterBy/FilterBy';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="product-filter">
            <h1>Products</h1>
            <SortBy />
            <FilterBy />
        </nav>
    );
};

export default Nav;
