/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import ProductController from "./ProductController";

const categoryUrl = "https://fakestoreapi.com/products/categories";

const CategoryController = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(categoryUrl);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1 id="page-title">Products</h1>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ProductController selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryController;
