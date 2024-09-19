import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using Routes and Route
import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // New product detail component

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError('Failed to fetch categories.');
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          selectedCategory 
            ? `https://fakestoreapi.com/products/category/${selectedCategory}` 
            : 'https://fakestoreapi.com/products'
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="App">
        <h1 id="page-title">Products</h1>
        <Routes>
          <Route 
            path="/" 
            element={
              loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <div className='main'>
                  <CategoryList 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    handleCategoryChange={handleCategoryChange} 
                  />
                  <ProductList products={products} />
                </div>
              )
            } 
          />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Product detail route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
