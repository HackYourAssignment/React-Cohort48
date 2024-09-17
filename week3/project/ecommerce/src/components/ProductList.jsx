//week3/project/ecommerce/src/ProductList.jsx
import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.js";

import {useFavorites} from "../context/FavoritesContext.jsx";
import {ProductCard} from "./ProductCard.jsx";



export const ProductList = ({selectedCategory}) => {
    const { favorites, toggleFavorite } = useFavorites();
    let url;

    if (selectedCategory) {
        url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    } else {
        url = 'https://fakestoreapi.com/products';
    }


    const { data: products, loading, error } = useFetch(url);

    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-grid">
            {Array.isArray(products) && products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isFavorited={favorites.includes(product.id)}
                    toggleFavorite={toggleFavorite}
                    navigate={navigate}
                />
            ))}
        </div>
    );
};