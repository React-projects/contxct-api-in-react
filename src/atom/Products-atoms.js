import { atom } from "recoil";

const ProductsState = atom({

    key: 'ProductsState', // unique ID (with respect to other atoms/selectors)
    default:[
        { id: 1, name: "John" },
        { id: 2, name: "muhammed" },
        { id: 3, name: "ahmed" },
      ] // default value (aka initial value)
  });
  export default ProductsState;