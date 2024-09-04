import * as React from 'react';
import Categories from './categories';
import ProductsController from './ProductsController';

const categoryApiUrl = 'https://fakestoreapi.com/products/categories';

const CategoryController = () => {
    const [categories, setCategories] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [error, setError] = React.useState(null);

    const fetchCategories = async () => {
        try {
            const response = await fetch(categoryApiUrl);
            const data = await response.json();
            setCategories(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching categories: ', error);
            setError(error);
        }
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
      }

    React.useEffect(() => {
        fetchCategories();
    }, []);

    return (
        error ? <h1>There was an error fetching categories</h1> :
        <>
        <Categories categories={categories} category={selectedCategory} handleCategoryClick={handleCategoryClick} />
        <ProductsController selectedCategory={selectedCategory} />
        </>
    );
}

export default CategoryController;