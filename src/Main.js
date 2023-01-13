import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyContext from './MyContext';
import './App.css';
import Loading from './components/Loading/Loading';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Nav from './components/Nav/Nav';
import App from './App.js';
import CartPage from './pages/CartPage';

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

    const cartFunctions = (condition, itemOnClick) => {
        // debugger;

        if (condition === 'add') {
            productsData.filter((product) => {
                if (product.id === itemOnClick) {
                    setProductsToCart(product);
                    setAmount((prevAmount) => prevAmount + 1);
                    // setProductsToCart((prevP) => {
                    //     prevP = product;
                    //     if (prevP[product]) {
                    //         return console.log(prevP[product]);
                    //     }
                    // });
                }
            });
        } else {
            console.log('else');
            productsData.filter((p) => {
                if (p.id === itemOnClick) {
                    console.log(condition, p);
                }
            });
        }
        console.log(productsToCart, amount);
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
