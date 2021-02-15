import logo from './logo.svg';
import './App.css';
import ProductCard from "./Components/ProductCard"
import BrandsBar  from "./Components/BrandsBar"
import SearchBar from "./Components/SearchBar"
import ProductContainer from "./Components/ProductContainer"

function App() {
  return (
    <div className="App">
       <BrandsBar/>
       <SearchBar/>
       <ProductContainer/>
       
    </div>
  );
}

export default App;
