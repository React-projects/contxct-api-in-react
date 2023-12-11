// import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import ProductsState from "../atom/Products-atoms";

function ProductsList() {
  //   const products = useContext(ProductsContext);
  const [products, setproducts] = useRecoilState(ProductsState);

  return (
    <div className="products-list">
      Title is :
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
}

export default ProductsList;
