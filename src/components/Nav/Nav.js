import React from 'react';
import SortBy from '../SortBy/SortBy';
import FilterBy from '../FilterBy/FilterBy';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="product-filter">
            <h1 className="home-btn">
                <Link to={'/'} className="home-link">
                    Home
                </Link>
            </h1>
            <SortBy />
            <FilterBy />
        </nav>
    );
};

export default Nav;
