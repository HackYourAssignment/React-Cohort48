import heartRegular from '../assets/heart-regular.svg';
import heartSolid from  '../assets/heart-solid.svg';


console.log(heartRegular);

export const ProductCard = ({ product, isFavorited, toggleFavorite, navigate }) => {
    return (
        <div className="product">
            <div className="product-image-container">
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{ cursor: 'pointer' }}
                />
                <img
                    className="favorite-icon"
                    src={isFavorited ? heartSolid : heartRegular}
                    alt="favorite icon"
                    onClick={() => toggleFavorite(product.id)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
        </div>
    );
};