import React from 'react';
import './Product.css';

const Product = ({ img, price, title, index, value ,btnValue}) => {

    return (
        <div key={index} value={value} className="product-card">
            <div className="product-image">
                <img alt="/" src={img} />
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}</h6>
                <button value={btnValue} className="cart-btn" onClick={(e)=>console.log(e.target.value)}>
                    +
                </button>
                <p className="item-amount">"amount"</p>
                <button value={btnValue} className="cart-btn" onClick={(e)=>console.log(e.target.value)}>
                    -
                </button>
            </div>
        </div>
    );
};

export default Product;
//!amount ? '0' : amount
