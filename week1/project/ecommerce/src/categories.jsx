import React from "react";

const Categories = ({ categories, selectedCategory, handleCategoryClick }) => {
    return (
        <div className="categories">
        {categories.map((category) => (
            <button key={category}
            className = {`category ${category === selectedCategory ? 'category-selected' : ''}`}
            onClick={() => handleCategoryClick(category)}>
                {category}
            </button>
        ))}
        </div>
    );
    }

export default Categories;