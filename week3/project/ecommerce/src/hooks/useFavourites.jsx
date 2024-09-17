import * as React from 'react';
import { Context } from './Context';

const useFavourites = () => {
    const { favorites, products, removeFromFavorites } = React.useContext(Context);

    const favProducts = favorites.map((id) => products[id]);

    return { favProducts, removeFromFavorites };
}

export default useFavourites;