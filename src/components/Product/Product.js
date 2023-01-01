import React from 'react';
import './Product.css';

const Product = ({ img, price, title, index, value }) => {
    return (
        <div key={index} value={value} className="product-card">
            <div className="product-image">
                <img alt="/" src={img} />
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default Product;
