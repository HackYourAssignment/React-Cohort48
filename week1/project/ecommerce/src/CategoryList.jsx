//week1/project/ecommerce/src/CategoryList.jsx
import React, { useState } from 'react';
import categories from './fake-data/all-categories.js';
import { ProductList } from './ProductList';

export const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Initialize state with null to show all products

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            // If the clicked category is already selected, deselect it
            setSelectedCategory(null);
        } else {
            // Otherwise, select the clicked category
            setSelectedCategory(category);
        }
    };


    return (
        <div>
            {/* Category selection buttons */}
            {categories.map((category, index) => (
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