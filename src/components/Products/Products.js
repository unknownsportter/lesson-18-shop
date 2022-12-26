import React from 'react';
import Product from '../Product/Product';
import './Products.css';
import './productsData';

const Products = ({ img, price, title }) => {
    return (
        <section className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    );
};

export default Products;
