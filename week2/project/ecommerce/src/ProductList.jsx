import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = selectedCategory === 'all' 
          ? 'https://fakestoreapi.com/products' 
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      
      <div className="mb-4">
        <button 
          className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
          onClick={() => setSelectedCategory('all')}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button 
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
