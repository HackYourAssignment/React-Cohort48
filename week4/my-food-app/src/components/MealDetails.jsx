import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import '../assets/styles/style.css';

function MealDetails() {
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const { favorites, handleFavorite } = useContext(AppContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        setMealDetails(data.meals[0]);
        setLoading(false);
      });
  }, [idMeal]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!mealDetails) {
    return <p>No details available for this meal.</p>;
  }

  const isFavorite = favorites.some((fav) => fav.idMeal === mealDetails.idMeal);

  return (
    <div className="meal-details">
      <h2 className="meal-header">{mealDetails.strMeal}</h2>
      <div className="meal-content">
        <img
          className="meal-img"
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
        />
        <div className="meal-instructions">
          <p className='paraf'>{mealDetails.strInstructions}</p>
          <button className="favorite-button" onClick={() => handleFavorite(mealDetails)}>
            <span
              className="favorite-icon"
              style={{ color: isFavorite ? 'red' : 'gray' }}
            >
              {isFavorite ? '❤️' : '🤍'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
