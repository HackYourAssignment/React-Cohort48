/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import '../assets/styles/style.css';

function FoodItem({meal}) {
  const navigate = useNavigate();
  const { handleFavorite, favorites } = useContext(AppContext);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    handleFavorite(meal);
  };

  const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);
  return (
    <div className="food-item" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
      <img className="food-img" src={meal.strMealThumb} alt={meal.strMeal} />
      <h3 className="food-title">{meal.strMeal}</h3>
      <p className="food-area">{meal.strArea}</p>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <span className="favorite-icon" style={{ color: isFavorite ? 'red' : 'gray' }}>
          {isFavorite ? '❤️' : '🤍'}
        </span>
      </button>
    </div>
  );
}

export default FoodItem;

