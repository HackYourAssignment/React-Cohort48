//week3/project/ecommerce/src/CategoryList.jsx
import React, {useEffect, useState} from 'react';
import { ProductList } from './ProductList.jsx';
import {useFetch} from "../hooks/useFetch.js";


export const CategoryList = () => {
    const { data: categories, loading, error } = useFetch(`https://fakestoreapi.com/products/categories`);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            // If the clicked category is already selected, deselect it
            setSelectedCategory(null);
        } else {
            // Otherwise, select the clicked category
            setSelectedCategory(category);
        }
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* Category selection buttons */}
            {categories && categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => handleCategoryClick(category)} // Handle category click
                    className={selectedCategory === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}

            {/* ProductList renders products based on the selected category */}
            <ProductList selectedCategory={selectedCategory} />
        </div>
    );
};