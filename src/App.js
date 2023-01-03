import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
// import { dataArr } from './Data/productsData';v

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [productsData, setproductsData] = useState([]);
    // const [sort, setSort] = useState(['Featured']);
    // const [category, setCategory] = useState('All');

    const dataFetch = async () => {
        const api = 'https://fakestoreapi.com/products';
        try {
            const response = await fetch(api);
            const data = await response.json();
            setproductsData(data);
            setAllProducts(data);
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

    useEffect(() => {
        dataFetch();
    }, []);

    const categories = allProducts
        .map((item) => item.category)
        .filter((value, index, array) => array.indexOf(value) === index);

    return (
        <MyContext.Provider
            value={{
                productsData,
                categories,
                filterProductByCategory,
            }}
        >
            <div className="App">
                <Nav />
                <Products />
            </div>
        </MyContext.Provider>
    );
}

export default App;
