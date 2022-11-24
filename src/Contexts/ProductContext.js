import { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        axios.get("https://api.computerspartselectronics.com/products")
            .then((res) => {
                    console.log(res.data)
                setProducts(res.data);
                    console.log(products)
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
            });
    }, [products]);

    return (
        <ProductContext.Provider value={ [products, setProducts] }>
            {props.children}
        </ProductContext.Provider>
    )
}