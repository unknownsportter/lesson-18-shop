import React, { useContext } from 'react';
import MyContext from '../../MyContext';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const { productsData } = useContext(MyContext);

    return (
        <section className="products">
            {productsData.map((item, index) => {
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
