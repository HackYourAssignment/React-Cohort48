//week1/project/ecommerce/src/CategoryList.jsx
import React, {useEffect, useState} from 'react';
import { ProductList } from './ProductList';


export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Initialize state with null to show all products
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchCategories = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/categories`);
                if (!response.ok) throw new Error(`Failed to fetch categories`);

                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
    };


    useEffect(() => {
        fetchCategories();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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