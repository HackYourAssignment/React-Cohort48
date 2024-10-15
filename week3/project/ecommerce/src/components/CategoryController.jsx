import * as React from 'react';
import Categories from './categories';
import useFetch from '../hooks/useFetch';

const categoryApiUrl = 'https://fakestoreapi.com/products/categories';

const CategoryController = ({selectedCategory, handleCategoryClick}) => {

    const { data:categories, loading, error } = useFetch(categoryApiUrl);

    if (loading) {
        return <h1>Loading categories...</h1>;
    }

    if (error) {
        return <h1>There was an error fetching categories</h1>;
    }

    return (
        <>
        <Categories categories={categories} category={selectedCategory} handleCategoryClick={handleCategoryClick} />
        </>
    );
}

export default CategoryController;