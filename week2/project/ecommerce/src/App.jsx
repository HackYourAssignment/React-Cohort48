import { useState } from "react";
import "./App.css";
import CategoryController from "./CategoryController.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CategoryController
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
