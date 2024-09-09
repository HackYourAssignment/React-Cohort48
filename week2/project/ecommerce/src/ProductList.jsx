//week2/project/ecommerce/src/ProductList.jsx
import * as React from 'react';
import {useState, useEffect} from "react";


export const ProductList = ({selectedCategory}) => {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url;

                if (selectedCategory) {
                    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
                } else {
                    url = 'https://fakestoreapi.com/products';
                }

                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch products`);

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, [selectedCategory]);


    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};