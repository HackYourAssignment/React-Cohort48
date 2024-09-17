import { createContext, useState } from "react";
// a context object that will hold the state
export const FavouritesContext = createContext();

//a provider component that will hold the state
export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      setFavourites([...favourites, id]); // add the id to the favourites array if it is not already there
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
