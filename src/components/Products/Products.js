import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ data }) => {
    return (
        <section className="products">
            {data.map((item, index) => {
                return (
                    <Product
                        value={item.category}
                        price={item.price + '$'}
                        img={item.image}
                        title={item.title}
                        key={index + 10}
                    />
                );
            })}
        </section>
    );
};

export default Products;
