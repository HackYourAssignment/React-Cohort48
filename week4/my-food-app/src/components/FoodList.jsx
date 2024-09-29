import { useState, useEffect, useContext } from 'react';
import FoodItem from './FoodItem';
import { AppContext } from '../Context/AppContext';
import '../assets/styles/style.css';

function FoodList() {
  const { meals , setMeals, favorites, handleFavorite } = useContext(AppContext);
  const [country, setCountry] = useState('');
  const [areas, setAreas] = useState([]); 


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((data) => {
        setAreas(data.meals || []);
      })
      .catch((error) => console.log('Error fetching areas:', error));
  }, []);

  useEffect(() => {
    if (country) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
        .then((response) => response.json())
        .then((data) => {
          setMeals(data.meals || []);
        })
        .catch((error) => console.log('Error fetching meals:', error));
    }
  }, [country, setMeals]);



  return (
    <div className="foodlist-container">
    <h2 className="meal-list-title">Meal List</h2>
    <div className="country-filter">
      <label className="country-label" htmlFor="country-select">Filter by Country:</label>
      <select
        id="country-select"
        className="country-select"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      >
        <option value="">Select Country</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
    </div>

    <div className="meal-list">
      {meals.length === 0 ? (
        <p className="no-meals">No meals found matching your filters.</p>
      ) : (
        meals.map((meal) => (
          <FoodItem
            key={meal.idMeal}
            meal={meal}
            onFavorite={handleFavorite}
            isFavorite={favorites.some((fav) => fav.idMeal === meal.idMeal)}
          />
        ))
      )}
    </div>
  </div>
  );
}

export default FoodList;