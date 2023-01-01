import React from 'react';
import SortBy from '../SortBy/SortBy';
import FilterBy from '../FilterBy/FilterBy';
import './Nav.css';
import { dataArr } from '../../Data/productsData';

const Nav = ({ categories, funcFilter }) => {
    return (
        <nav className="product-filter">
            <h1>Products</h1>
            <SortBy />
            <FilterBy categories={categories} funcFilter={funcFilter} />
        </nav>
    );
};

export default Nav;
