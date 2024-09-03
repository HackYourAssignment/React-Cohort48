import products from "../fake-data/all-products"; // Adjust the path as necessary
import "../App.css";

const Electronics = () => {
  const electronicsItems = products.filter(
    (product) => product.category === "electronics"
  );
    return <div>
        <h1>Electronics</h1>
        <div>
            {
                electronicsItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.title} />
                        <p>Price: ${item.price}</p>
                        <p>
                            Rating: {item.rating.rate} ({item.rating.count} reviews)
                        </p>
                    </div>
                ))
        }
        </div>    
        
        Electronics Page
    </div>;
};

export default Electronics;
