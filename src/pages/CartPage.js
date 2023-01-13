import React, { useContext } from 'react';
import Product from '../components/Product/Product';
import Products from '../components/Products/Products';
import MyContext from '../MyContext';

const CartPage = () => {
    const { amount, productsToCart } = useContext(MyContext);
    console.log(productsToCart);
    return (
        <section className="products">
            {productsToCart.map((item, index) => {
                return (
                    <Product
                        value={item.category}
                        price={item.price + '$'}
                        img={item.image}
                        title={item.title}
                        key={index + 10}
                        itemId={item.id}
                    />
                );
            })}
        </section>
    );
};

export default CartPage;
