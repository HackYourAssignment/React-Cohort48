/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const Context = createContext({
    favourites: [],
    toggleFavorite: () => {},
  });

export const Provider = ({ children }) => {
  const [favourites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favourites.includes(id)) {
      setFavorites(favourites.filter(fId => fId !== id));
    } else {
      setFavorites([...favourites, id]);
    }
  };

  return (
    <Context.Provider value={{ favourites, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
};
