import { useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
    const [allproducts, setAllproducts] = useState([]);

    axios.get(`https://fakestoreapi.com/products`)
        .then(res => setAllproducts(res.data));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {
            allproducts.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    );
};

export default Products;