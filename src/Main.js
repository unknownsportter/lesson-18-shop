import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyContext from './MyContext';
import './App.css';
import './Main.css';
import Loading from './components/Loading/Loading';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Nav from './components/Nav/Nav';
import App from './App.js';
import CartPage from './pages/CartPage';
import Button from '@mui/material/Button';
import CartDrawer from './components/CartDrawer/CartDrawer';
import { Drawer } from '@mui/material';

function Main() {
    const [allProducts, setAllProducts] = useState([]);
    const [productsData, setproductsData] = useState([]);
    const [productsToCart, setProductsToCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        dataFetch();
    }, []);

    const dataFetch = async () => {
        const api = 'https://fakestoreapi.com/products';
        try {
            const response = await fetch(api);
            const data = await response.json();
            setproductsData(data);
            setAllProducts(data);
            // setProductsToCart();
            setLoading(false);
        } catch (error) {
            console.log(error + 'this is Error');
        }
    };

    const filterProductByCategory = (category) => {
        if (category === 'All') {
            setproductsData(allProducts);
        } else {
            setproductsData(
                allProducts.filter((item) => item.category === category)
            );
        }
    };

    const categories = allProducts
        .map((item) => item.category)
        .filter((value, index, array) => array.indexOf(value) === index);

    //

    const cartFunctions = (condition, id) => {
        // debugger;
        const cartCopy = [...productsToCart];
        const cartItemIndex = cartCopy.findIndex(
            (product) => product.id === id
        );
        const allProductsItemIndex = productsData.findIndex(
            (product) => product.id === id
        );

        if (condition === 'add') {
            if (cartItemIndex === -1) {
                const newItem = {
                    ...productsData[allProductsItemIndex],
                    amount: 1,
                };
                cartCopy.push(newItem);
            } else {
                cartCopy[cartItemIndex].amount += 1;
            }
        } else {
            if (cartCopy[cartItemIndex].amount >= 2) {
                cartCopy[cartItemIndex].amount -= 1;
            } else if (cartCopy[cartItemIndex].amount === 1) {
                cartCopy.splice(cartItemIndex, 1);
            }
        }
        setProductsToCart(cartCopy);
    };

    return (
        <BrowserRouter>
            <MyContext.Provider
                value={{
                    productsData,
                    categories,
                    filterProductByCategory,
                    ShopingCart,
                    cartFunctions,
                    amount,
                    productsToCart,
                }}
            >
                {loading && <Loading />}
                <Button onClick={() => setCartOpen(true)}>Open Cart</Button>
                <Drawer
                    anchor={'left'}
                    open={cartOpen}
                    onClose={() => setCartOpen(false)}
                >
                    <div className="cart-Drawer">{<CartDrawer />}</div>
                </Drawer>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="App">
                                <App />
                            </div>
                        }
                    />
                    <Route path="/Cart" element={<CartPage />} />
                </Routes>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default Main;
