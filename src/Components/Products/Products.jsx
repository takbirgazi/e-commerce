import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";

const Products = () => {
    const { search } = useContext(AuthContext);
    const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            setLoading(false);
            const products = res.data;
            const singProd = products.filter(prod => prod.title.includes(search));
            setAllproducts(singProd);
        });

    return (
        <div className={`${loading ? "w-full h-full" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"}`}>
            {
                loading ? <Loading /> : allproducts.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    );
};

export default Products;