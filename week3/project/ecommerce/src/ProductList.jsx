import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "./FavouritesContext";
import heartRegular from "./assets/heart-regular.svg"; 
import heartSolid from "./assets/heart-solid.svg"; 

const ProductList = ({ products }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <div className="product">
              <img className="product-img" src={product.image} alt={product.name} />
              <span>{product.title}</span>
            </div>
          </Link>
          <img
            src={favourites.includes(product.id) ? heartSolid : heartRegular}
            alt="favourite"
            className="favourite-icon"
            onClick={() => toggleFavourite(product.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
