import React from 'react';
import Product from '../Product/Product';
import './Products.css';
import { dataArr } from '../Data/productsData';

const Products = () => {
    return (
        <section className="products">
            {dataArr.map((item) => {
                return (
                    <Product
                        price={item.price + '$'}
                        img={item.image}
                        title={item.title}
                    />
                );
            })}
        </section>
    );
};

export default Products;
// img={item.image} price={item.price}
