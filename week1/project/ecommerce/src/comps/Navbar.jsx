// Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/man">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/womans">Women's Clothing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
