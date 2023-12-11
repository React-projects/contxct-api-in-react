
import { createContext,useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider(props) {
    const [products, setproducts] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "muhammed" },
        { id: 3, name: "ahmed" },
      ]);
    return(
        <ProductsContext.Provider value={products}>
            {props.children}

        </ProductsContext.Provider>

   
    )
      
}
export default ProductsProvider;