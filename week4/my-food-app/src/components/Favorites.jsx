import { useContext } from "react";
import FoodItem from "./FoodItem";
import { AppContext } from "../Context/AppContext";
import "../assets/styles/style.css";

function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite meals added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((meal) => (
            <FoodItem key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
