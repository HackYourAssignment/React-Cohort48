import { Link } from 'react-router-dom'; // Import Link


const ProductList = ({ products }) => {
  return (
    <ul className="products">
      {products.map(({ id, image, title }) => (
        <li key={id} className="product-item">
          <div className="product">
            <img className="product-img" src={image} alt={title} />
            <Link to={`/product/${id}`}> {/* Link to product detail */}
              <span>{title}</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
