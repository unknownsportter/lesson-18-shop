import { React, useContext } from 'react';
import './Product.css';
import MyContext from '../../MyContext';

const Product = ({ img, price, title, index, value, itemId }) => {
    const { cartFunctions } = useContext(MyContext);
    return (
        <div key={index} value={value} className="product-card">
            <div className="product-image">
                <img alt="/" src={img} />
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}</h6>

                <button
                    value={itemId}
                    className="cart-btn"
                    onClick={(itemOnClick) =>
                        cartFunctions('add', parseInt(itemOnClick.target.value))
                    }
                >
                    +
                </button>
                <p className="item-amount">"amount value"</p>
                <button
                    value={itemId}
                    className="cart-btn"
                    onClick={(itemOnClick) =>
                        cartFunctions(
                            'subtract',
                            parseInt(itemOnClick.target.value)
                        )
                    }
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Product;
//!amount ? '0' : amount
