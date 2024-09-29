import { useState, useEffect, useContext } from 'react';
import FoodList from './FoodList';
import { AppContext } from '../Context/AppContext';
import '../assets/styles/style.css';

function Home() {
  const {
    selectedCategory,
    setSelectedCategory,
    filteredMeals,
    setFilteredMeals,
    handleFavorite,
    favorites,
    loading,
    setLoading,
  } = useContext(AppContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((data) => setCategories(data.meals));
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          const mealIds = data.meals.map((meal) => meal.idMeal);

          Promise.all(
            mealIds.map((idMeal) =>
              fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(
                (response) => response.json()
              )
            )
          ).then((mealsDetails) => {
            setFilteredMeals(mealsDetails.map((mealDetail) => mealDetail.meals[0]));
            setLoading(false);
          });
        });
    }
  }, [selectedCategory, setFilteredMeals, setLoading]);

  return (
    <div className="home-container">
      <h2 className="home-title">Find Your Meal</h2>
      <div className="category-filter">
        <label htmlFor="category-select" className="category-label">Category:</label>
        <select
          id="category-select"
          className="category-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <FoodList meals={filteredMeals} onFavorite={handleFavorite} favorites={favorites} />
      )}
    </div>
  );
}

export default Home;
