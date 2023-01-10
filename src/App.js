import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Loading from './components/Loading/Loading';

function App() {
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
            console.log(condition, itemOnClick);
        }
    };

    // if (!p.amount) {
    //     return p + { amount: amount };
    // } else if (p.amount > 0) {
    //     return setAmount((prev) => prev + 1);
    // }

    return (
        <MyContext.Provider
            value={{
                productsData,
                categories,
                filterProductByCategory,
                ShopingCart,
                cartFunctions,
            }}
        >
            <div className="App">
                {loading && <Loading />}
                <Nav />
                <Products />
            </div>
        </MyContext.Provider>
    );
}

export default App;
