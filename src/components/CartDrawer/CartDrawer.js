import React, { useContext } from 'react';
import Product from '../Product/Product';
import MyContext from '../../MyContext';

const CartDrawer = () => {
    const { productsToCart } = useContext(MyContext);
    return (
        <section className="products">
            {productsToCart.map((item, index) => {
                return (
                    <Product
                        value={item.category}
                        price={item.price + '$'}
                        img={item.image}
                        title={item.title}
                        key={index + 11}
                        itemId={item.id}
                        itemAmount={item.amount}
                    />
                );
            })}
        </section>
    );
};

export default CartDrawer;
