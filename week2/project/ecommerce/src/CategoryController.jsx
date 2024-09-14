
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import ProductController from "./ProductController";

const categoryUrl = "https://fakestoreapi.com/products/categories";

const CategoryController = ({ selectedCategory, handleCategoryChange }) => {
  
  const [categories, setCategories] = useState([]);
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
      setError(error);
    } finally {
      setLoading(false);
    }
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
