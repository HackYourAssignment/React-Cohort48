/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Context } from '../context/context';

const FavoriteButton = ({ productId }) => {
  const { favourites, toggleFavorite } = useContext(Context);

  return (
    <button onClick={() => toggleFavorite(productId)}>
      {favourites.includes(productId) ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;
