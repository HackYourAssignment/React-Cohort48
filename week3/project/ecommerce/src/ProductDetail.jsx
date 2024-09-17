import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavouritesContext } from "./FavouritesContext";
import "./ProductDetail.css";
import heartRegular from "./assets/heart-regular.svg";
import heartSolid from "./assets/heart-solid.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img
        src={favourites.includes(product.id) ? heartSolid : heartRegular}
        alt="favourite"
        className="favourite-icon"
        onClick={() => toggleFavourite(product.id)}
      />
    </div>
  );
};

export default ProductDetail;
