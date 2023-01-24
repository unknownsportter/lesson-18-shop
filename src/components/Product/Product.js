import { React, useContext } from 'react';
import './Product.css';
import MyContext from '../../MyContext';

const Product = ({ img, price, title, index, value, itemId, itemAmount }) => {
    const {
        // inDrawer,
        cartFunctions,
        setIsInCart,
        // setProductIdPage,
        // productIdPage,
    } = useContext(MyContext);

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
                    className="cart-btn add-btn"
                    onClick={(itemOnClick) =>
                        cartFunctions(
                            'add',
                            parseInt(itemOnClick.target.value),
                            setIsInCart((prevInCart) => (prevInCart += 1))
                        )
                    }
                >
                    Add to cart
                </button>

                {itemAmount >= 1 && <h5>{itemAmount}</h5>}

                {itemAmount >= 1 && (
                    <button
                        value={itemId}
                        className="cart-btn remove-btn"
                        onClick={(itemOnClick) =>
                            cartFunctions(
                                'remove',
                                parseInt(itemOnClick.target.value),
                                setIsInCart((prevInCart) => {
                                    if (prevInCart > 0) {
                                        return prevInCart - 1;
                                    } else {
                                        setIsInCart(0);
                                    }
                                })
                            )
                        }
                    >
                        Remove
                    </button>
                )}

                {/* <Link to={'/product'}>
                    <button
                        className="cart-btn item-Info"
                        onClick={(idOnClick) => {
                            setProductIdPage(idOnClick);
                        }}
                    >
                        Item info
                    </button>
                </Link> */}
                {/* {inDrawer && <button>remove All</button>} */}
            </div>
        </div>
    );
};

export default Product;
