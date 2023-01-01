import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import { dataArr } from './Data/productsData';
import { useState } from 'react';
function App() {
    const [filteredProducts, setFilteredProducts] = useState(dataArr);
    const categories = dataArr
        .map((item) => item.category)
        .filter((value, index, array) => array.indexOf(value) === index);

    const funcFilter = (e) => {
        if (e.target.value === 'All') {
            setFilteredProducts(dataArr);
        } else {
            setFilteredProducts(
                dataArr.filter((value) => value.category === e.target.value)
            );
        }
    };
    return (
        <div className="App">
            <Nav categories={categories} funcFilter={funcFilter} />
            <Products data={filteredProducts} />
        </div>
    );
}

export default App;
