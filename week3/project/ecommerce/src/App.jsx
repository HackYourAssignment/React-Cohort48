import { useState } from "react";
import "./App.css";
import CategoryController from "./CategoryController.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import FavouritesPage from "./FavouritesPage.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Products</Link>
        <span> | </span>
        <Link to="/favourites">Favourites</Link>
      </nav>
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
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
