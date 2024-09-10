//week1/project/ecommerce/src/CategoryList.jsx
import React, { useState } from 'react';
import categories from '../fake-data/all-categories.js';
import {Button} from "./Button.jsx";
import { ProductList } from './ProductList.jsx';
import {removeFake} from "../utils/removeFake.js";

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
        //Category selection buttons
        <div>
            {categories.map((category, index) => (
                <Button
                    key={index}
                    label={removeFake(category)} //removeFake() removes 'fake' from the text
                    isSelected={selectedCategory === category}
                    onClick={() => handleCategoryClick(category)} // Handle category click

                />
            ))}

            {/* ProductList renders products based on the selected category */}
            <ProductList selectedCategory={selectedCategory} />
        </div>
    );
};