import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import ProductsProvider from "./context/ProductsContext";
import Card from "./components/Card";
// export const ProductsContext = createContext();

function App() {
  // const [products, setproducts] = useState([
  //   { id: 1, name: "John" },
  //   { id: 2, name: "muhammed" },
  //   { id: 3, name: "ahmed" },
  // ]);
  return (
    <div className="App">
      {/* <ProductsContext.Provider value={products}> */}
      {/* <ProductsProvider> */}
        <Navbar />
        <ProductsList />
        <Card>

        </Card>
          <Card.Title/>
        {/* </ProductsContext.Provider> */}
      {/* </ProductsProvider> */}
    </div>
  );
}

export default App;
