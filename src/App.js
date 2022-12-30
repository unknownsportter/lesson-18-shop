import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import { dataArr } from './components/Data/productsData';

function App() {
    return (
        <div className="App">
            <Nav data={dataArr} />
            <Products data={dataArr} />
        </div>
    );
}

export default App;
