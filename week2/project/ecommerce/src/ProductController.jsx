

import { useState, useEffect } from "react";
import ProductList from "./ProductList";



const ProductsController = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const endpoint = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : "https://fakestoreapi.com/products";
      const response = await fetch(endpoint);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("Failed to fetch products.");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ProductList products={products} selectedCategory={selectedCategory} />
  );
};

export default ProductsController;
