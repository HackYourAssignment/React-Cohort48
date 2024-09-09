import { useState } from "react";
import "./App.css";
import categories from "./fake-data/all-categories.js";
import products from "./fake-data/all-products.js";
import CategoryList from "./CategoryList.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        return `FAKE: ${product.category}` === selectedCategory;
      })
    : products;

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      <div className="app">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
