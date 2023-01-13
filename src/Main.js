import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyContext from './MyContext';
import './App.css';
import Loading from './components/Loading/Loading';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Nav from './components/Nav/Nav';
import App from './App.js';

function Main() {
    const [allProducts, setAllProducts] = useState([]);
    const [productsData, setproductsData] = useState([]);
    const [productsToCart, setProductsToCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(true);

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
            setProductsToCart(data);
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

    const cartFunctions = (condition, itemOnClick) => {
        // debugger;

        if (condition === 'add') {
            productsToCart.filter((p) => {
                if (p.id === itemOnClick) {
                    setAmount((prevAmount) => prevAmount + 1);
                    console.log(p, amount);
                }
            });
        } else {
            console.log('else');
            productsToCart.filter((p) => {
                if (p.id === itemOnClick) {
                    console.log(condition, p);
                }
            });
        }
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
                }}
            >
                {loading && <Loading />}
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
                </Routes>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default Main;
