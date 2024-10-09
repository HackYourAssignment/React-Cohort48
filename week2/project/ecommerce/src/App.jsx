import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import ProductDetails from "./components/ProductDetails"; 
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [loading, setLoading] = useState(false);   
  const [categoryError, setCategoryError] = useState(null);
  const [productError, setProductError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(['all', ...data]);
      } catch (err) {
        setCategoryError('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          selectedCategory === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setProductError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setProductError(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CategoryList
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategorySelect}
                />
                {categoryError && <p>{categoryError}</p>}
                {loading && <p>Loading...</p>}
                {productError && <p>{productError}</p>}
                <ProductList products={products} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
