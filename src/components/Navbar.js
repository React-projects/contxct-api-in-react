import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";
import { useRecoilState } from "recoil";
import ProductsState from "../atom/Products-atoms";

function Navbar(props) {
    // const context = useContext(ProductsContext);
    const [products, setproducts] = useRecoilState(ProductsState);

    return(
        <div className="navbar">
        <h1>product :{products.length}</h1>
    
      </div>
    )
}


export default Navbar;
