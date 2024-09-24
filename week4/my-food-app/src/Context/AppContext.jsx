import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setMeals(data.meals);
          setFilteredMeals(data.meals);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  const handleFavorite = (meal) => {
    if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        handleFavorite,
        selectedCategory,
        setSelectedCategory,
        selectedArea,
        setSelectedArea,
        meals,
        setMeals,
        filteredMeals,
        setFilteredMeals,
        meal,
        setMeal,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
 
  );
}



AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
